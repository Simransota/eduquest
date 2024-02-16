/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#1a1426",
        "black-200": "#0f0b1a",
        "white-100": "#f3f3f3",
        "white-200": "#e5e5e5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        glass: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0) 0 0 / 15px 15px",
      },
      screens: {
        xs: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};