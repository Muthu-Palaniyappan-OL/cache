/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Azonix: ["'azonix'", 'sans-serif']
      },
      colors: {
        'dark-blue': '#112D4E',
        'light-blue': '#3F72AF',
        'lighter-blue': '#DBE2EF',
        'whitter': '#F9F7F7'
      },
      animation: {
      }
    },
  },
  plugins: [],
}

