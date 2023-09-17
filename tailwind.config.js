/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
  mode: 'jit',
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        Teal: "#ef4444",
        HummingBird: "#d1flee",
        yellow: "#e4d63b",
        Solitude: "#0c4a6e",
        gray: "#4B4B4C",
        white: '#fafaf9'
      },
      
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-120%)" },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },

  plugins: [],
};
