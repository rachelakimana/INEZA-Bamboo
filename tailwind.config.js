module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        headerbgimage: "url('./images/headerimage.png')",
        homeimage1: "url('./images/bamboocup.png')",
        homeimage2: "url('./images/bamboochair2.jpg')",
        homeimage3: "url('./images/bamboobed.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
