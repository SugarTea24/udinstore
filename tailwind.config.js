/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#424242",
        secondary: "#ccc",
      },
      boxShadow: {
        fixed: "8px 8px 16px rgba(0, 0, 0, 0.5);",
        invFixed: "inset 8px 8px 16px rgba(0, 0, 0, 0.5)",
        smFixed: "3px 3px 5px rgba(0, 0, 0, 0.5);",
        smInvFixed: "inset 5px 5px 10px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
