/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'LightRay':'#d6e2f0',
        'GrayishBlue':'#7b879d',
        'DarkBlue':'#1f3251',
        'softblue':'#8bacda',
        'cyan':'#00fff7',
        'verydarkblue-hard':'#0d192b',
        'verydarkblue-mid':'#14243d',
        'verydarkblue-soft':'#2f415b',  
        "darkcyan":"#3c8067",
        "verydarkcyan":"#295746",
        "cream":"#f2ebe3",
        "verydarkblue":"#1c232b",
        "darkgrayishblue":"#6c7289",  
        'Verydarkblue':'#090b1a',
        'Darkdesaturatedblue':'#1b1938',
        'Softviolet':'#aa5cdb', 
        'CleanWhite':'#fafafa',
        'frontendmentor-red':'#ee304c',   
      },
      fontFamily:{
        Outfit:'Outfit, sans-serif',
        Fraunces:'Fraunces, serif',
        Montserrat:'Montserrat, sans-serif',
        Card_sans:['Inter','Lexend Deca','sans-serif'],
        Barlow:'Barlow, sans-serif',
      }
    },
  },
  plugins: [],
}
