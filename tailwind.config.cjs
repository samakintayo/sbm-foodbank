/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#4B0082",
        goldAccent: "#FFD700",
      },
    },
  },
  plugins: [],
};
