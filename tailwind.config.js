/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./views/**/*.ejs"],
  theme: {
    screens: {
      xs: "476px",
      sm: "623px",
      md: "850px",
      lg: "1000px",
      xl: "1300px",
    },
    extend: {
      spacing: {
        78: "19rem",
        92: "22rem",
      },
      width : {
        'alert' : '34rem',
      },
      fontFamily : {
        'plex-sans' : ["IBM Plex Sans", "sans-serif"],
        'rubik' : ["Rubik"],
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
