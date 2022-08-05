module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBlue: '#201D47',
        darkBlue: '#17153A',
        violet: '#7950f2',
      },
    },
  },
  plugins: [require('daisyui')],
  important: '#__next',
};
