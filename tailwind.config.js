/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*[.js, .json]",
  ],
  theme: {
    extend: {
      colors:{
        "black-thing":"#292929"
      },
      fontFamily:{
        "Monserrat":['"Montserrat"', "sans-serif"],
        "Oswald":['"Oswald"', "sans-serif"],
        "Poppins":['"Poppins"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

