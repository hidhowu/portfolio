/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
    extend: {
      colors: {
        'primary': '#121F2B',
        'secondary': '#FFB840',
        'third': '#113650',
        'fourth': '#009DFF',
      },
      fontFamily: {
        suez: ['Suez One', 'serif'],
        dangrek: ['Dangrek', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

