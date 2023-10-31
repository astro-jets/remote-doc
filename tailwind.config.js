/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    screens:{
        sm:'480px',
        md:'768px',
        lg:'976px',
        xl:'1440px'
      },
    extend: {
      colors:{
        primary:'#c2410c',
        secondary:'rgb(36, 112, 36)',
        gray:{
          900:'#202225',
          800:'#2f3136',
          700:'#36393f',
          600:'#4f545c',
          400:'#d4d7dc',
          300:'#e3e5e8',
          200:'#ebedef',
          100:'#f2f3f5'
        }
      },
    },
  },
  plugins: [],
})
