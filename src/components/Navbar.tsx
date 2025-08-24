import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  


  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-white backdrop-filter 
        shadow-md transition-transform duration-300 ease-in-out
      `}
    >
      <nav className="bg-background-beige shadow-md h-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-6">
          <div className="flex items-left justify-between h-20">
            {/* Logo + Title */}
            <div className="flex items-left">
              <Link to="/" className="flex items-center ">
                <img
                  src={`${process.env.PUBLIC_URL}/logo.jpg`}
                  alt="Logo"
                  className="w-24 h-auto mt-5"
                />
                <span className="mt-5 p-5 text-base lg:text-3xl sm:text-lg md:text-2xl tracking-wide font-ribeye">
                  HIDDEN PEARL MUSIC ACADEMY
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-5 font-sans font-semibold text-lg ml-auto mt-5 ">
              <Link to="/" className="hover:text-yellow-400">Home</Link>
              <Link to="/about" className="hover:text-yellow-400">About</Link>
              <Link to="/programs" className="hover:text-yellow-400">Programs</Link>
              <Link to="/events" className="hover:text-yellow-400">Events</Link>
              <Link to="/bookingform" className="hover:text-yellow-400">Booking</Link>
              <Link to="/contact">
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition">
                  Contact
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden font-semibold">
              <button
              
                onClick={() => setIsOpen((v) => !v)}
                aria-controls="mobile-menu"
                className="p-2 rounded-lg focus:outline-none focus:ring"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden absolute top-20 inset-x-0 z-50 bg-white border-t border-beige-300 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-3 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-beige-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-beige-200"
              >
                About
              </Link>
              <Link
                to="/programs"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-beige-200"
              >
                Programs
              </Link>
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-beige-200"
              >
                Events
              </Link>
              <Link 
                to="/bookingform" 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg hover:bg-beige-200"
              >
                Booking
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
