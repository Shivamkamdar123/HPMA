import React, { useState, useEffect } from "react";
import { Instagram, Facebook, Youtube } from "lucide-react";


const SidebarCTA: React.FC<any> = () => {

  return (
    <div
      className="fixed top-24 right-1 w-auto z-50 mt-1
        bg-white backdrop-filter shadow-md rounded-xl px-3 py-2 flex items-center gap-3
        transition-transform duration-300 ease-in-out"
    >
      {/* Social Icons */}
      <div className="flex space-x-6 p-2 ml-auto">
        {/* Phone */}
        <a
          href="tel:+91 89626 15903"
          className="text-sm font-semibold text-burgundy-600 whitespace-nowrap"
        >
          📞 Call: +91 89626 15903
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-pink-500 hover:scale-150 transition-transform duration-300" />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5 text-blue-600 hover:scale-150 transition-transform duration-300" />
        </a>
        <a
          href="https://youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <Youtube className="w-5 h-5 text-red-500 hover:scale-150 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default SidebarCTA;
