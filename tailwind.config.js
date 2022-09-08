/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#3282B8',
        secondary: '#64748b',
        dark: '#1B262C',
      },
      screens: {
        '2xl': '1320px',
      },
      fontFamily: {
        robo: "'Roboto Slab', serif",
      },
    },
  },
  plugins: [],
};
