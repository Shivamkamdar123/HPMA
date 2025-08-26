/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: false,
  theme: {
    extend: {
       keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeVertical: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        marquee: "marquee linear infinite",
        "marquee-vertical": "marqueeVertical linear infinite",
        reverse: "marquee linear infinite reverse",
      },
      colors: {
        burgundy: {
          900: '#800020',
        },
        gold: {
          400: '#FFD700',
          500: '#DAA520',
          600: '#B8860B',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        ribeye:['Ribeye', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
