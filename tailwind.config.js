/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E3188",
        light: "#999999",
        mainBorder: "#BDBDBD", 
      },
      fontFamily: {
        somar: ["Somar-Medium", "sans-serif"],
        somarBold: ["Somar-Bold", "sans-serif"],
        somarLight: ["Somar-Light", "sans-serif"],
      },
      animation: {
        glow: "glow 1.5s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 3px 1px rgba(72, 191, 145, 0.7)" },
          "50%": { boxShadow: "0 0 5px 2px rgba(72, 191, 145, 1)" },
        },
      },
    },
  },
  plugins: [],
};
