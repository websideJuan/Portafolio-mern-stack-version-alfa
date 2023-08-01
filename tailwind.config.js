/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "black-thing":"#292929"
      }
    },
  },
  plugins: [],
}

