import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background-beige shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex justify-center items-center">
            <Link to="/" className="font-serif text-2xl font-bold">
              <img
                // src="/logo.jpg"
                src={`${process.env.PUBLIC_URL}/logo.jpg`}
                alt="Logo"
                className="w-16 h-auto align-item-center"
              />
            </Link>
            <span className="font-serif text-3xl font-bold ml-1">
              HPM ACADEMY
            </span>
          </div>
          <div className="hidden md:block">
            <div className=" ml-10 flex items-baseline font-bold space-x-4">
              <Link
                to="/"
                className="nav-link px-3 py-1 text-gray-900 transition duration-300 hover:text-gold-400"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="nav-link px-3 py-1 text-gray-900 transition duration-300 hover:text-gold-400"
              >
                About
              </Link>
              <Link
                to="/programs"
                className="nav-link px-3 py-1 text-gray-900 transition duration-300 hover:text-gold-400"
              >
                Programs
              </Link>
              {/* <Link to="/faculty" className="nav-link px-3 py-1">Faculty</Link> */}
              <Link
                to="/events"
                className="nav-link px-3 py-1 text-gray-900 transition duration-300 hover:text-gold-400"
              >
                Events
              </Link>
              <Link to="/contact" className="btn-primary">
                <button className="bg-beige-900 text-gray-900 px-6 py-2 rounded-md hover:bg-yellow-400 transition-colors">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="flex md:hidden">
            <Link to="/" className="nav-link px-3 py-2">
              Home
            </Link>
            <Link to="/about" className="nav-link px-3 py-2">
              About
            </Link>
            <Link to="/programs" className="nav-link px-3 py-2">
              Programs
            </Link>
            <Link to="/events" className="nav-link px-3 py-2">
              Events
            </Link>
            <Link to="/contact" className="nav-link px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
