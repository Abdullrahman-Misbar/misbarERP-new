/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E3188",
        light: "#999999",
      },
      fontFamily: {
        somar: ['"Somar-Medium"', "sans-serif"],
        somarBold: ['"Somar-Bold"', "sans-serif"],
        somarLight: ['"Somar-Light"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
