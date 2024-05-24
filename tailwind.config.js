/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: '320px',
        tab: '480px',
        pc: '1024px',
        desktop: '1200px'
      },
      colors: {
        white: '#fff',
      }
    },
  },
  plugins: [],
}

