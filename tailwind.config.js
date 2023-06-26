import background from "./src/assets/background.png"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#3485FE',
        'secondary': '#67A3FE',
        'terciary': '#CCE0FF',
        'darkBlue': '#001433',
        'small-button': "#99C2FF",
        'background': "#E6F0FE",
        'form-border': "#002966",
        'emphasis': "#FF5432"
      },
      height: {
        'panel': '50rem'
      },
      margin: {
        'boton': '28rem',
      },
      backgroundImage: {
        'backgroundPrimary': "url(https://dorian-rose.github.io/h2o2_background/background.png)"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xxl': '1.75rem'
      }
    },
  },
  plugins: [],
}

