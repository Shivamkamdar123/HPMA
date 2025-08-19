import React, { useState } from "react";


const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-9 filter blur-s"
          src="https://cdn.pixabay.com/photo/2017/10/08/17/22/cello-2830670_1280.jpg"
          alt="Guitar background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
          <span className="block">Inspiring Future</span>
          <span className="block text-gold-400">Musicians</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Where Passion Meets Excellence in Music Education
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#programs"
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-64 sm:w-auto"
          >
            Explore Programs
          </a>
          <a
            onClick={() => setIsBookingOpen(true)}
            href="/bookingform"
            className="border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-64 sm:w-auto"
          >
            <span className="flex items-center justify-center space-x-2 cursor-pointer">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>Book a Free Trial</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
