/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    spacing: {
      '0': '0.75',
      '1': '1rem',
      '1.5': '1.5rem',
      '1.75':'1.75rem',
      '2': '8rem',
      '3': '12rem',
      '4': '16rem',
      '5': '24rem',
      '6': '28rem',
      '7': '32rem',
      '8': '36rem',
      '9': '40rem',
      '10': '44rem',
      '11': '48rem',
    },
    extend: {
      colors: {
        herobg:'#011638'
      }
    },
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif'],
      worksans: ['Work Sans', 'sans-serif']
    }
  },
  plugins: [],
}
