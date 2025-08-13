import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 text-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-serif mb-4">HPM ACADEMY</h3>
            <p className="text-gray-900 text-sm">
              Excellence in music education since 2005. Nurturing talent, fostering creativity, 
              and building future musicians.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-900 transition duration-300 hover:text-gold-400">Home</Link></li>
              <li><Link to="/about" className="text-gray-900 transition duration-300 hover:text-gold-400">About</Link></li>
              <li><Link to="/programs" className="text-gray-900 transition duration-300 hover:text-gold-400">Programs</Link></li>
              <li><Link to="/events" className="text-gray-900 transition duration-300 hover:text-gold-400">Events</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="text-gray-900">Piano Lessons</li>
              <li className="text-gray-900">Guitar Classes</li>
              <li className="text-gray-900">Violin Training</li>
              <li className="text-gray-900">Drum Lessons</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-900">
              <li></li>
              <li>Indore, Madhya Pradesh</li>
              <li>Phone: 8770387979, 8962615903</li>
              <li>Email: lalitkushwah56056@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} - Hidden Pearls Musical Academy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
