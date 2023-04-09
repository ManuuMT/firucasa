/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        modal: {
          from: { opacity: "0", transform: "translateY(-100%)" },
          to: { opacity: "1", transform: "translateY(0%)" },
        },
      },
      animation: {
        modal: "modal 0.6s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
