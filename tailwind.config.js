/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        255: '255px',
      },
      padding: {
        255: '255px',
      },
      zIndex: {
        1:'1',
        60: '60',
        100: '100',
        200: '200',
        300: '300',
        400: '400',
        500: '500',
        1000: '1000',
      },
      colors: {
        primary: "#518099",
        secondary: "#E3F5FF",
      },
      width: {
        header:' calc(100% - 255px)',
      }
      
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
};
