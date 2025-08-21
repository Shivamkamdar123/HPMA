import React from "react";

const SidebarCTA: React.FC = () => {
  return (
    <div
      className="fixed top-1/3 left-0 h-64 w-12 bg-burgundy-900 flex flex-col items-center justify-around z-40 rounded-r-lg shadow-lg font-bold"
    >
      {/* Phone */}
      <a
        href="tel:+911234567890"
        className="flex items-center justify-center transform -rotate-90 origin-center text-white hover:text-yellow-300 transition whitespace-nowrap text-sm"
      >
        +91 12345 67890
      </a>

      {/* Email */}
      <a
        href="mailto:hr@gmail.com"
        className="flex items-center justify-center transform -rotate-90 origin-center text-white hover:text-yellow-300 transition whitespace-nowrap text-sm"
      >
        hr@gmail.com
      </a>
    </div>
  );
};

export default SidebarCTA;
