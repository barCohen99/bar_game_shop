/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '641px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1281px',
      'max-sm': {'max': '640px'},
      'max-md': {'max': '768px'},
      'max-lg': {'max': '1024px'},
      'max-xl': {'max': '1280px'},
      extend: {
      },
    },
  },
  plugins: [],
}

