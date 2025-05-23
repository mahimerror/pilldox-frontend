/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        normalFont: ["normalFont"],
        poppins: ["'Poppins', 'sans-serif'"],
        mediumFont: ["mediumFont"],
        boldFont: ["boldFont"],
      },
      colors: {
        primary: "#008080",
        textColor: "#222222",
        text: "#2E2E2E",
      },
    },
  },
  plugins: [require("daisyui")],
};
