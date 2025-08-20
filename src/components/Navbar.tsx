import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background-beige shadow-md h-20 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Title */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/logo.jpg`}
                alt="Logo"
                className="w-14 h-auto"
              />
              <span className="ml-2 text-2xl md:text-3xl font-bold tracking-wide">
                HPM ACADEMY
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden ml-20 mt-2 font-sans md:flex space-x-6 font-semibold text-lg">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <Link to="/programs" className="hover:text-yellow-400">Programs</Link>
            <Link to="/events" className="hover:text-yellow-400">Events</Link>
            <Link to="/contact">
              <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition">
                Contact
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <nav className="relative shadow-md h-20 font-poppins"> 
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="p-2 rounded-lg focus:outline-none focus:ring"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </nav>

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-20 inset-x-0 z-50 bg-yellow-200 border-t border-beige-300 shadow-lg overflow-hidden"
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
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition">
                Contact
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
