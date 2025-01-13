/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home': "url('../img/background.svg')",
      })
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },

  },
  plugins: [],
}

