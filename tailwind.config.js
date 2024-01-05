/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "Poppins",
        sans: "sans-serif",
      },
      blur: {
        "5": "5px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
