/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: "Lexend Deca",
        roboto: "Roboto",
        slab: "Roboto Slab"
      },
      screens: {
        375: "375px",
        425: "425px",
        550: "550px",
        900: "900px",
        1400: "1400px"
      }
    },
  },
  plugins: [],
};
