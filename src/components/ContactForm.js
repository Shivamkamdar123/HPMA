// import React, { useState } from "react";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     program: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
//       <div>
//         <label htmlFor="name" className="block text-gray-700 mb-2">
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className=" px-2 py-2 border rounded-lg focus:ring-2 focus:ring-beige-900 focus:border-beige-900"
//         />
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-gray-700 mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-beige-900 focus:border-beige-900"
//         />
//       </div>

//       <div>
//         <label htmlFor="phone" className="block text-gray-700 mb-2">
//           Phone
//         </label>
//         <input
//           type="tel"
//           id="phone"
//           name="phone"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-beige-900 focus:border-beige-900"
//         />
//       </div>

//       <div>
//         <label htmlFor="program" className="block text-gray-700 mb-2">
//           Program of Interest
//         </label>
//         <select
//           id="program"
//           name="program"
//           value={formData.program}
//           onChange={handleChange}
//           required
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-beige-900 focus:border-beige-900"
//         >
//           <option value="">Select a program</option>
//           <option value="piano">Piano Lessons</option>
//           <option value="guitar">Guitar Classes</option>
//           <option value="vocals">Vocal Training</option>
//           <option value="violin">Violin & Cello</option>
//           <option value="production">Music Production</option>
//           <option value="drums">Drum Classes</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="message" className="block text-gray-700 mb-2">
//           Message
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           rows="4"
//           className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-beige-900 focus:border-beige-900"
//         ></textarea>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-beige-900 text-black py-3 rounded-lg font-semibold hover:bg-beige-800 transition-colors"
//       >
//         Book a Free Demo Class
//       </button>
//     </form>
//   );
// }

// export default ContactForm;
