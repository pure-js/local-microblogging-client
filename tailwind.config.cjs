/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: ['./apps/**/*.{jsx,tsx}'],
  // theme: {
  //   extend: {},
  // },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['forest', 'winter'],
  },
  darkMode: ['class', '[data-theme="forest"]'],
};
