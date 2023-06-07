// tailwind.config.js
const { tailwindConfig } = require("@storefront-ui/react/tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/product/**/*.{js,ts,jsx,tsx}",
    "./src/app/search/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "rgba(110, 50, 240)",
          800: "rgba(110, 50, 240)",
        },
      },
      backgroundColor: {
        primary: {
          100: "rgba(110, 50, 240, 0.1)",
        },
      },
    },
  },
  plugins: [],
};
