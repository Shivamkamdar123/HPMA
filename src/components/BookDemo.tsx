import React, { useState } from "react";

const BookDemo: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    age: "",
    contact: "",
    instrument: "",
    session: "morning",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = { ...formData };

    try{
       const response = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });
    if (response.ok) {
      alert("Booking saved successfully!");
      // Reset form if needed
      setFormData({
        name: "",
        gender: "",
        age: "",
        contact: "",
        instrument: "",
        session: "",
      });
    } 
    else {
      alert("Failed to save booking");
    }
  } catch (error) {
    console.error("Error saving booking:", error);
  }
  };

  return (
    <section
      id="contact"
      className="relative bg-beige-100  py-10 px-6 overflow-hidden"
    >
    <form
      id="bookingform"
      className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-burgundy-900 text-center">Demo Class Booking Form</h2>

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

      {/* Instrument Dropdown */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">Instrument to Learn</label>
        <select
          name="instrument"
          value={formData.instrument}
          onChange={handleChange}
          className="border p-2 rounded"
        >
          <option value="">Select an instrument</option>
          <option value="guitar">Guitar</option>
          <option value="piano">Piano</option>
          <option value="violin">Violin</option>
          <option value="drums">Drums</option>
          <option value="Saxophone">Saxophone</option>
          <option value="Tabla">Tabla</option>
          <option value="Sitar">Sitar</option>
          <option value="Octapad">Octapad</option>
          <option value="Harmonium">Harmonium</option>
          <option value="Vocals">Vocals</option>
          <option value="Other">Other</option>
        </select>
      </div>


      {/* Session Dropdown */}
      <div className="flex flex-col">
        <label className="font-medium mb-1">Preffered Session</label>
        <select
          name="session"
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
          className="bg-gold-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gold-500"
        >
          Submit
        </button>
      </div>
    </form>

  </section>
  );
};

export default BookDemo;
