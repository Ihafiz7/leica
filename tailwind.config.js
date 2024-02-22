/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        corpS: ["Corporate S",'sans-serif']
      },
      screens:{
        sm:'400px',
        md:'768px',
        xl:'1024px',
        lg:'1240px'
      },
    },
  },
  plugins: [],
}