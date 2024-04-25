/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        255: '255px',
      },
      zIndex: {
        60: '60',
      }
    },
  },
  plugins: [],
};
