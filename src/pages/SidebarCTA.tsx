import React, { useState, useEffect } from "react";


const SidebarCTA: React.FC<any> = () => {

  return (
    <div
      className="
        fixed top-24 right-1 w-auto z-50 mt-1
        bg-yellow-500 backdrop-filter hover:bg-yellow-600
        shadow-md rounded-xl px-3 py-2 flex items-center gap-3
        transition-transform duration-300 ease-in-out"
    >
      {/* Phone */}
      <a
        href="tel:+91 89626 15903"
        className="text-sm font-semibold text-burgundy-600 whitespace-nowrap"
      >
        📞 Call: +91 89626 15903
      </a>
      {/* Translate Button with active label */}
      {/* <button
        onClick={() => setLang(lang === "en" ? "hi" : "en")}
        className="text-xs bg-yellow-500 text-white px-2 py-1 rounded hover:bg-burgundy-600 transition"
      >
        {lang === "en" ? "हिन्दी" : "En"}
      </button> */}
    </div>
  );
};

export default SidebarCTA;
