/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1000px',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      colors: {
        'custom-blue': '#0077B5',
      },
      boxShadow: {
        'right': '4px 0px 10px rgba(0, 0, 0, 0.1)', // Adjust the values to get the desired effect
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

