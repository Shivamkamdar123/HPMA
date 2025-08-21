require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const nodemailer = require("nodemailer");
const axios = require("axios");

const app = express();

/* ---------- Middleware ---------- */
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "*",
    credentials: false,
  })
);

/* ---------- SQLite Setup ---------- */
const db = new sqlite3.Database("./leads.db", (err) => {
  if (err) {
    console.error("SQLite connection error:", err.message);
  } else {
    console.log("✅ Connected to SQLite");
  }
});

db.run(
  `CREATE TABLE IF NOT EXISTS leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    instrument TEXT NOT NULL,
    note TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`
);

/* ---------- Email (Nodemailer) ---------- */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: String(process.env.SMTP_SECURE || "true") === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ---------- Helpers ---------- */
function cleanPhone(raw) {
  return String(raw || "").replace(/\D/g, ""); // digits only
}

function clickToChatLink(toE164, payload) {
  // wa.me requires country code + number, no plus or spaces
  const msg = encodeURIComponent(payload);
  return `https://wa.me/${toE164}?text=${msg}`;
}

async function sendWhatsAppCloudAPI(toE164, name, instrument) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const templateName = process.env.WHATSAPP_TEMPLATE_NAME || "lead_capture_confirmation";

  if (!token || !phoneNumberId) {
    console.log("ℹ️ WhatsApp Cloud API not configured; skipping auto-send.");
    return;
  }

  const url = `https://graph.facebook.com/v20.0/${phoneNumberId}/messages`;
  const body = {
    messaging_product: "whatsapp",
    to: toE164,
    type: "template",
    template: {
      name: templateName,
      language: { code: "en" },
      components: [
        {
          type: "body",
          parameters: [
            { type: "text", text: name || "there" },
            { type: "text", text: instrument || "music" },
          ],
        },
      ],
    },
  };

  const res = await axios.post(url, body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

/* ---------- Routes ---------- */

// Health
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// Create lead
app.post("/api/leads", async (req, res) => {
  try {
    let { name, email, phone, instrument, note } = req.body || {};

    if (!name || !email || !phone || !instrument) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    phone = cleanPhone(phone);
    if (phone.length < 10) {
      return res.status(400).json({ ok: false, error: "Invalid phone number" });
    }

    const insertSQL =
      "INSERT INTO leads (name, email, phone, instrument, note) VALUES (?, ?, ?, ?, ?)";
    db.run(insertSQL, [name, email, phone, instrument, note || null], function (err) {
      if (err) {
        console.error("SQLite insert error:", err);
        return res.status(500).json({ ok: false, error: "DB error" });
      }

      const leadId = this.lastID;

      // Prepare email
      const html = `
        <div style="font-family:Arial, sans-serif">
          <h2>🎶 New Demo Booking</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Instrument:</b> ${instrument}</p>
          <p><b>Message:</b> ${note || "N/A"}</p>
          <hr/>
          <p>Lead ID: ${leadId}</p>
          <p>Time: ${new Date().toLocaleString()}</p>
        </div>
      `;

      // Send email (fire-and-forget)
      transporter
        .sendMail({
          from: process.env.EMAIL_FROM || process.env.SMTP_USER,
          to: process.env.EMAIL_TO || process.env.SMTP_USER,
          subject: `New Demo Booking: ${name} (${instrument})`,
          html,
        })
        .then(() => console.log("📧 Email sent"))
        .catch((e) => console.error("Email error:", e?.response || e));

      // Build Click-to-Chat link for your business number
      const businessE164 = cleanPhone(process.env.BUSINESS_WHATSAPP_E164 || "");
      const ctcMessage =
        `New Demo Booking:%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        `Email: ${encodeURIComponent(email)}%0A` +
        `Phone: ${encodeURIComponent(phone)}%0A` +
        `Instrument: ${encodeURIComponent(instrument)}%0A` +
        `Message: ${encodeURIComponent(note || "N/A")}`;
      const clickToChat = clickToChatLink(businessE164, decodeURIComponent(ctcMessage));

      // Optional: WhatsApp Cloud API auto-message to the student
      const studentE164 =
        phone.startsWith("91") || phone.startsWith("1") ? phone : `91${phone}`; // default India
      sendWhatsAppCloudAPI(studentE164, name, instrument).catch((e) =>
        console.error("WhatsApp API error:", e?.response?.data || e.message)
      );

      return res.status(201).json({
        ok: true,
        id: leadId,
        clickToChat, // frontend can choose to open this in a new tab if you want
      });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});

/* ---------- Start ---------- */
const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
