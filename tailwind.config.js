/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "410px",
      },
      // backgroundColor: {
      //   primary: "#F2F3D9",
      //   secondary: "#030027"
      //   // card: "#B6EADA",
      //   // sidebar: "#B6EADA",
      //   // header: "#B6EADA"
      // },
      colors: {
        
        primary: "#858AE3",
        secondary: "#97DFFC"
      }
    },
  },
  plugins: [],
};
