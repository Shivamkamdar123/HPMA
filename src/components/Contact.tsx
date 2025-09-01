import React, { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "./firebase";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xovnleyz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire({
        title: "✅ Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#fbbf24",
        background: "#fff8e1",
        backdrop: `rgba(0,0,0,0.4) left top no-repeat`,
      });

      setFormData({ name: "", email: "", message: "" });
    } else {
      Swal.fire({
        title: "⚠️ Error!",
        text: "There was an issue sending your message. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
    }
  } catch (error) {
    console.error("Error sending message:", error);
    Swal.fire({
      title: "⚠️ Error!",
      text: "Something went wrong. Please try again later.",
      icon: "error",
      confirmButtonText: "Okay",
    });
  }
};

  
  return (
    <section
      id="contact"
      className="relative bg-beige-100 py-10 px-6 overflow-hidden mt-14 mx-5 sm:mt-15 md:mt-20 lg:mt-16 "
    >
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-90 "></div>
      <div className="relative text-burgundy-900 max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-xl mb-3 ">
          Have questions or want to join our music programs? We’d love to hear
          from you!
        </p>
      </div>
      <hr className="w-[200px] border-t-2 border-gray-900 mx-auto" />
      <div className="relative w-full max-w-lg mx-auto rounded-xl bg-white p-5 shadow-xl">
        <form
          className="bg-white p-4  space-y-6 min-w-[300px]"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-default font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-default font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-default font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows={3}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gold-500 hover:bg-gold-400 text-Black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>{" "}
      <br /> <br />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Follow us for updates</p>
        <div className="flex justify-center mt-2 space-x-4">
          <a href="#" className="text-gold-500 hover:text-gold-400">
            🎵
          </a>
          <a href="#" className="text-gold-500 hover:text-gold-400">
            📸
          </a>
          <a href="#" className="text-gold-500 hover:text-gold-400">
            📹
          </a>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <div className="h-[3px] w-1/3 bg-gradient-to-r from-burgundy-900 via-gold-500 to-burgundy-900 rounded-full"></div>
      </div>
      {/* Contact Info */}
      <div className="relative mx-auto text-md mt-9 text-md">
        <p>
          <h2>
            <strong>Addresses of Music Institute</strong>
          </h2>{" "}
          <br />
          <br />
          📍 Nanda Nagar: Galli No 9, Near Keshav Kirana Store, Nanda Nagar,
          Indore - 452011. <br /> 📞 Contact number: +91 87703 87979 (also
          listed as 8962615903) <br />
          <br />
          📍 Ashish Nagar: 123, Mahadev Totla Nagar Road, Near Bengali Square,
          Ashish Nagar, Indore - 452016. <br /> 📞 Contact number: +91 62615
          32945 (also listed as 7440331441) <br /> <br />
          📍 Airport Road: 27, Nearby Domino's, Opposite Punjab National Bank,
          Mahavir Kripa Avenue, Kalani Nagar Extension, Sukhdev Nagar,
          Indore-452005. <br /> 📞 Contact number: +91 87703 87979 (also listed
          as 7489061576 and 8962615903)
          <br /> <br />
          📍 Manglaya Sadak: Green View, Singapore Township, Indore, Madhya
          Pradesh 453771. <br /> 📞 Contact number: +91 87703 87979 (also listed
          as 9244805697 and 8962615903)
          <br /> <br />
          ✉️ lalitkushwah56056@gmail.com
          <br />
          <br />
          <br />
          <hr className="w-1/2 border-t-2 border-dashed border-gray-900 mx-auto" />
        </p>
      </div>
    </section>
  );
}
