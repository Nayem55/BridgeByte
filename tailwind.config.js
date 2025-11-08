/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0F0B2B",
        bg2: "#1C1750",
        textColor: "#EAEAF2",
        muted: "#B8B6CE",
        accent1: "#8A3FFC",
        accent2: "#1FB6FF",
        card: "#18133D",
      },
      fontFamily: {
        inter: [
          "Inter",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
