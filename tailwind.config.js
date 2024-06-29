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
      }
    },
  },
  plugins: [],
}

