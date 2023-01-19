/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  plugins: [require('tailwindcss')],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}