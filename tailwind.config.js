/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    spacing: {
      '0': '0.75',
      '1': '1rem',
      '1.25':'1.25rem',
      '1.5': '1.5rem',
      '1.75':'1.75rem',
      '1.9':'1.9rem',
      '2.5': '2rem',
      '2.7': '4rem',
      '2.8': '6rem',
      '2': '8rem', 
      '3': '12rem',
      '4': '16rem',
      '4.5': '20rem',
      '5': '24rem',
      '6': '28rem',
      '7': '32rem',
      '8': '36rem',
      '9': '40rem',
      '10': '44rem',
      '11': '48rem',
      '12': '52rem',
      '13': '56rem',
      '14': '60rem',
      '15': '64rem',
    '16': '68rem',
    '18': '72rem',
    '20': '76rem',
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
