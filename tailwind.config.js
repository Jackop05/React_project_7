/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'black': '#000000',
        'darker': '#0B2434',
        'dark': '2B283A',
        'darkerGray': '4A4E74',
        'gray': '#F5F5F5', 
        'green': '#59E391',
        'purple': '#5035FF',
        'white': '#FFFFFF',
      },
      width: {
        '35': '35px',
        '90': '90px',
        '500': '400px',
      },
      maxWidth: {
        '300': '300px',
      },
      height: {
        '35': '35px',
        'fvh': '100vh',
      },
      margin: {
        '8': '8px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '35': '35px',
      },
      padding: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '35': '35px',
      },
      fontSize: {
        '13': '13px',
        '16': '16px',
        '20': '20px',
        '25': '25px',
      },
      gap: {
        '20': '20px',
      },
    },
  },
  plugins: [],
}

