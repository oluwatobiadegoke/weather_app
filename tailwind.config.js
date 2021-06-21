module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        main: {
          100: "#cfcfd2",
          200: "#9f9fa5",
          300: "#706e77",
          400: "#403e4a",
          500: "#100e1d",
          600: "#0d0b17",
          700: "#0a0811",
          800: "#06060c",
          900: "#030306"
        },

        cards: {
          100: "#d2d3d8",
          200: "#a5a6b0",
          300: "#787a89",
          400: "#4b4d61",
          500: "#1e213a",
          600: "#181a2e",
          700: "#121423",
          800: "#0c0d17",
          900: "#06070c"
        },

        utils: {
          100: "#e2e2e4",
          200: "#c5c6ca",
          300: "#a8a9af",
          400: "#8b8d95",
          500: "#6e707a",
          600: "#585a62",
          700: "#424349",
          800: "#2c2d31",
          900: "#161618"
        },

        loader: {
          100: "#fffbe0",
          200: "#fff7c1",
          300: "#fff4a3",
          400: "#fff084",
          500: "#ffec65",
          600: "#ccbd51",
          700: "#998e3d",
          800: "#665e28",
          900: "#332f14"
        },

        text: {
          100: "#fafafb",
          200: "#f5f5f7",
          300: "#f1f1f3",
          400: "#ececef",
          500: "#e7e7eb",
          600: "#b9b9bc",
          700: "#8b8b8d",
          800: "#5c5c5e",
          900: "#2e2e2f"
        },

        button: {
          "celcius": "#110E3C",
          "faren": "#585676",
          "search": "#3C47E9",
        },

      },

      fontFamily: {
        body: ['Raleway'],
      },

      backgroundImage: theme => ({
        "cloud": "url('./images/Cloud-background.png')",
      })
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}