/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#3490dc",
        "grey-100": "#eeeeee",
        "grey-200": "#6e6b6b",
        "grey-400": "#454444",
        primary: "#5b24bf",
        secondary: "#a2ded0",
      },
    },
  },
  plugins: [],
};
