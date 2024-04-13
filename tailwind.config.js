module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  extend: {
    backgroundImage: theme => ({
      'house-front': "url('/src/images/Hintergrundbild.jpg')"
    }),
  }
}

