import React, { useState, useEffect, useMemo } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

declare const jspdf: any;

// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyD0BSwy7KmROpW1W5OJj0fOKZ2GhbMjsYI",
  authDomain: "hpma-5d741.firebaseapp.com",
  projectId: "hpma-5d741",
  storageBucket: "hpma-5d741.firebasestorage.app",
  messagingSenderId: "157472799597",
  appId: "1:157472799597:web:57c0c11c7ee348f78db864",
  measurementId: "G-QP9BHZDQEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Type Definitions ---
interface Booking {
  id: string;
  name: string;
  gender?: string;
  age?: string;
  email: string;
  contact?: string;
  instrument: string;
  session?: string;
  formSubmitDate: Date;
}

// --- Helper ---
const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// --- Dashboard Component ---
const Dashboard: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  });
  const [filterType, setFilterType] = useState<"Monthly" | "Yearly" | "Custom">(
    "Monthly"
  );
  const [selectedYear, setSelectedYear] = useState(
    `${new Date().getFullYear()}`
  );
  const [customStart, setCustomStart] = useState("");
  const [customEnd, setCustomEnd] = useState("");

  // Fetch data from Firestore
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "demoBookings"));
        console.log(`Found ${querySnapshot.docs.length} documents.`);

        const bookingsData = querySnapshot.docs
          .map((doc) => {
            const data = doc.data();

            if (
              !data.formSubmitDate ||
              typeof data.formSubmitDate.toDate !== "function"
            ) {
              console.warn(
                `Document ${doc.id} has missing/invalid formSubmitDate.`,
                data
              );
              return null;
            }

            return {
              id: doc.id,
              name: data.name || "",
              gender: data.gender || "",
              age: data.age || "",
              email: data.email || "",
              contact: data.contact || "",
              instrument: data.instrument || "",
              session: data.session || "",
              formSubmitDate: (data.formSubmitDate as Timestamp).toDate(),
            } as Booking;
          })
          .filter((booking): booking is Booking => booking !== null);

        setBookings(bookingsData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch bookings. Check console for details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // 🔹 Filter by selected month
  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const bookingMonth = `${booking.formSubmitDate.getFullYear()}-${String(
        booking.formSubmitDate.getMonth() + 1
      ).padStart(2, "0")}`;
      return bookingMonth === selectedMonth;
    });
  }, [bookings, selectedMonth]);

  // --- PDF Export ---
  const handleDownloadPdf = () => {
    if (!filteredBookings.length) {
      alert("No data available for the selected month to generate a PDF.");
      return;
    }

    const doc = new jsPDF();
    const tableColumn = ["Name", "Email", "Instrument", "Form Submit Date"];
    const tableRows: any[][] = [];

    filteredBookings.forEach((booking) => {
      const bookingData = [
        booking.name,
        booking.email,
        booking.instrument,
        formatDate(booking.formSubmitDate),
      ];
      tableRows.push(bookingData);
    });

    const [year, month] = selectedMonth.split("-");
    const monthName = new Date(
      parseInt(year),
      parseInt(month) - 1
    ).toLocaleString("default", { month: "long" });

    doc
      .setFontSize(18)
      .text(`Demo Class Bookings - ${monthName} ${year}`, 14, 22);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      theme: "grid",
      headStyles: { fillColor: [22, 160, 133] },
    });

    doc.save(`bookings_${selectedMonth}.pdf`);
  };

  // --- Render ---
  if (loading) return <p>Loading bookings...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-16 p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center my-6 mb-6">
        <h2 className="text-2xl font-bold">Demo Class Bookings Dashboard</h2>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Month Filter */}
      {/* <div className="flex justify-between items-center mb-4">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          {Array.from({ length: 12 }, (_, i) => {
            const date = new Date();
            date.setMonth(date.getMonth() - i);
            const yearMonth = `${date.getFullYear()}-${String(
              date.getMonth() + 1
            ).padStart(2, "0")}`;
            const label = date.toLocaleString("default", {
              month: "long",
              year: "numeric"
            });
            return (
              <option key={yearMonth} value={yearMonth}>
                {label}
              </option>
            );
          })}
        </select>

        <button
          onClick={handleDownloadPdf}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Download PDF
        </button>
      </div> */}
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        {/* Filter Type */}
        <select
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as "Monthly" | "Yearly" | "Custom")
          }
          className="border px-3 py-2 rounded-md"
        >
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
          <option value="Custom">Custom Range</option>
        </select>

        {/* Monthly Filter */}
        {filterType === "Monthly" && (
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            {Array.from({ length: 12 }, (_, i) => {
              const date = new Date();
              date.setMonth(date.getMonth() - i);
              const yearMonth = `${date.getFullYear()}-${String(
                date.getMonth() + 1
              ).padStart(2, "0")}`;
              const label = date.toLocaleString("default", {
                month: "long",
                year: "numeric",
              });
              return (
                <option key={yearMonth} value={yearMonth}>
                  {label}
                </option>
              );
            })}
          </select>
        )}

        {/* Yearly Filter */}
        {filterType === "Yearly" && (
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            {Array.from({ length: 5 }, (_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        )}

        {/* Custom Range */}
        {filterType === "Custom" && (
          <div className="flex gap-2">
            <input
              type="month"
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
            <span className="self-center">to</span>
            <input
              type="month"
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="border px-3 py-2 rounded-md"
            />
          </div>
        )}

        {/* PDF Download */}
        <button
          onClick={handleDownloadPdf}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>

      {/* Table */}
      {filteredBookings.length === 0 ? (
        <p>No bookings available for the selected month.</p>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Instrument</th>
                <th className="border p-2">Form Submit Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-100">
                  <td className="border p-2">{booking.name}</td>
                  <td className="border p-2">{booking.email}</td>
                  <td className="border p-2">{booking.instrument}</td>
                  <td className="border p-2">
                    {formatDate(booking.formSubmitDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
