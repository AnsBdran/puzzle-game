/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      colors: {
        primary: "#FFFDFD",
        secondary: "#0B3C49",
        // text: '#114B5F',
      },
    },
  },
  plugins: [],
};
