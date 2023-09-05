/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#484848",
        200: "#292929",
        300: "#202032",
        400: "#1E201F",
        500: "#1E1E1E",
        600: "#12121E",
        700: "#151524",
        800: "#000000",
        900: "#090910",
      },
      secondary: {
        100: "#FFD000",
        200: "#FFC300",
        300: "#FFB700",
        400: "#FA0",
        500: "#FFA200",
        600: "#FF9500",
        700: "#F80",
        800: "#FF7B00",
      },
      tertiary: {
        100: "#F1F1F1",
        200: "#E6E6E6",
        300: "#C6C6C6",
        400: "#B6B6B6",
      },
    },
    fontFamily: {
      primary: ["Garet Book", "sans"],
      "primary-heavy": ["Garet Heavy", "sans"],
      secondary: ["KyivTypeSerif", "serif"],
      tertiary: ["Cyrillic Goth", "sans"],
    },
    extend: {
      borderRadius: {
        10: "10px",
        20: "20px",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
  },
  plugins: [],
};
