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

