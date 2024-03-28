/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens : {
      'xs' : '476px',
      'sm' : '623px',
      'md' : '850px',
      'lg' : '1000px',
      'xl' : '1300px'
    },
    extend: {
      spacing : {
        78 : '19rem' 
      }
    },
  },
  daisyui : {
    themes : ['light']
  },
  plugins: [require("daisyui")],
}