/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "Dark-cyan": "hsl(158, 36%, 37%)",
        "very-dark-cyan": "hsl(158, 36%, 20%)",
        Cream: "hsl(30, 38%, 92%)",
        "Very-dark-blue": " hsl(212, 21%, 14%)",
        "Dark-grayish-blue": "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
