import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-beige-100 text-burgundy-900 py-10 px-6 overflow-hidden"
    >
      {/* Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-90 bg-[url('data:image/jpeg;base64,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"></div>
      <div className="relative max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
        <p className="text-xl mb-3 ">
          Have questions or want to join our music programs? We’d love to hear
          from you!
        </p>
      </div>
      <hr className="w-[200px] border-t-2 border-gray-900 mx-auto" />
      <div className="relative bg-gray-900 w-full max-w-lg mx-auto rounded-xl bg-white p-5 shadow-xl">
        <form className="bg-white p-4  space-y-6 min-w-[300px]">
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
              placeholder="Your full name"
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
              placeholder="Write your message here..."
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gold-500 hover:bg-gold-600 text-burgundy-900 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
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
      {/* <p className="mt-4 text-sm text-gray-500 text-center">
        We’ll get back to you within 24 hours. 🎵 */}
      {/*

      <div className="flex flex-col items-center my-10 space-y-1">
        <div className="h-[2px] w-1/2 bg-gold-500"></div>
        <div className="h-[2px] w-1/3 bg-burgundy-900"></div>
        <div className="h-[2px] w-1/4 bg-gold-500"></div>
      </div> */}
      {/* Contact Info */}
      <div className="relative mx-auto text-md mt-9 text-md">
        <p>
          <h2><strong>Addresses of Music Institute</strong></h2> <br /><br />
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
          📍 Singapore Township: 13/1 Singapore Township, Green View opposite,
          RW22+WV2 Indore, Madhya Pradesh, Manglaya Sadak, 453771. <br /> 📞
          Contact number: +91 9244805697, 8962615903
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
