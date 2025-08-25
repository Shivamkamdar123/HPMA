import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

interface BookDemoProps {
  onClose?: () => void;
}

// Remove this duplicate declaration


const BookDemo: React.FC<BookDemoProps> = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    email: "",
    contact: "",
    instrument: "",
    session: "",
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

  const validateForm = () => {
    // Validate phone number (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.contact)) {
      Swal.fire({
        title: "Invalid Phone Number",
        text: "Please enter a valid 10-digit phone number",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#f87171",
      });
      return false;
    }

    // Validate age
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 3 || age > 80) {
      Swal.fire({
        title: "Invalid Age",
        text: "Age must be between 3 and 80 years",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#f87171",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_sh9tvq7",
        "template_erbi2ms",
        formData,
        "WfkwQliJnshMINu8C"
      );

      console.log(result.text);

      // Add success animation
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('animate-success');
      }

      // Success message with animation
      await Swal.fire({
        title: "✅ Success!",
        text: "Your demo class booking has been submitted successfully.",
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#fbbf24",
        background: "#fff8e1",
        backdrop: `rgba(0,0,0,0.4)`,
        showClass: {
          popup: 'animate__animated animate__fadeInUp'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown'
        }
      });

      // Reset form and close modal
      setFormData({
        name: "",
        gender: "",
        age: "",
        email: "",
        contact: "",
        instrument: "",
        session: "",
      });

      if (onClose) {
        onClose();
      }

    } catch (error: any) {
      console.error(error.text);
      Swal.fire({
        title: "❌ Failed!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
        confirmButtonColor: "#f87171",
        showClass: {
          popup: 'animate__animated animate__shakeX'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-beige-100 py-10 px-6 overflow-hidden">
      <form
        id="BookDemo"
        className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 transform transition-all duration-300 hover:shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-burgundy-900 text-center mb-6">
          Demo Class Booking Form
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Gender</label>
          <select 
            name="gender"
            title ="Select gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Age</label>
          <input
            type="number"
            title = "Enter your age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 rounded"
            min={3}
            max={80}
            required
          />
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="yourmail@example.com"
            required
          />
        </div>

        {/* Instrument */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Instrument to Learn</label>
          <select
            name="instrument"
            title ="Select an instrument"
            value={formData.instrument}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select an instrument</option>
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="violin">Violin</option>
            <option value="drums">Drums</option>
            <option value="saxophone">Saxophone</option>
            <option value="tabla">Tabla</option>
            <option value="sitar">Sitar</option>
            <option value="octapad">Octapad</option>
            <option value="harmonium">Harmonium</option>
            <option value="vocals">Vocals</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Session */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Preferred Session</label>
          <select
            name="session"
            title="Select a session"
            value={formData.session}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select a session</option>
            <option value="morning">10 AM - 12 PM</option>
            <option value="evening">4 PM - 6 PM</option>
          </select>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`relative bg-gold-400 text-black font-semibold px-6 py-2.5 rounded-lg 
            transform transition-all duration-300
            hover:bg-gold-500 hover:scale-105 active:scale-95
            focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-opacity-50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${isSubmitting ? 'animate-pulse' : ''}`}
          >
            {isSubmitting ? (
              <span className="inline-flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookDemo;