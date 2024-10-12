/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        maxcontainer: '1220px',
      },
      colors: {
        btncolor: '#8d5cf6',
        bgcolor: '#26335d',
        cardcolor: '#252B42',
        bar: '#E74040',
        cardtxt: '#737373',
        star: '#ffce31',
        mud: '#BDBDBD',
        orange: '#FF7B52',
      },
      fontFamily: {
        moon: 'Montserrat',
      },
      backgroundImage: {
        bannerimg: "url('./src/assets/bannerbg.png')",
       
      },

    },
  },
  plugins: [],
}

