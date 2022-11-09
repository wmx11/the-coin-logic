/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#201D47',
        darkBlue: '#17153A',
        violet: '#7950f2',
        grape: '#be4bdb',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
