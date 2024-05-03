/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
