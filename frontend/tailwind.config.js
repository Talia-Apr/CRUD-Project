/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4338ca",
          prm2: "#7B74DA",
          secondary: "#ECEAFF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          accentcont :"#000000",
          "base-100": "#ffffff",
        },
      }, 
    ],
  },

}
