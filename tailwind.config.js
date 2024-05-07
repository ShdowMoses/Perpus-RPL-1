/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*/*index.html"],
  theme: {
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
