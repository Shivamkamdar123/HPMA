import React, { useState, useEffect } from "react";

// interface SidebarCTAProps {
//   lang: "en" | "hi";
//   setLang: React.Dispatch<React.SetStateAction<"en" | "hi">>;
// }

const SidebarCTA: React.FC<any> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY <= 100) {
      setIsVisible(true);
    } else if (window.scrollY < lastScrollY) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-24 right-1 w-auto z-50 mt-1
        bg-yellow-500 backdrop-filter
        shadow-md rounded-xl px-3 py-2 flex items-center gap-3
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Phone */}
      <a
        href="tel:+918770387979"
        className="text-sm font-semibold text-burgundy-600 hover:text-yellow-500 whitespace-nowrap"
      >
        +91 8770387979
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
