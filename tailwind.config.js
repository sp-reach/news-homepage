/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      softOrange: '#e9ab53',
      softRed: '#f15e50',
      white: '#fffdfa',
      gray: '#c5c6ce',
      darkGray: '#5d5f79',
      darkPurple: '#00001a'
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
