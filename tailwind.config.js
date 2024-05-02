/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        'custom-red': '#ED1B24', 
      },
      borderColor: theme => ({
        ...theme('colors'),
        'custom-red': '#ED1B24',
      }),
      spacing: {
        'checkbox': '1.25rem',  // Define a new spacing scale for checkboxes
      }
    },
  },
  plugins: [],
}