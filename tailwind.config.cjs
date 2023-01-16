/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    backgroundImage: {
      hero: "url('/src/img/hero/bg.jpg')",
      about: "url('/src/img/about/image.png')",
      interview: "url('/src/img/interview/bg.png')",
    },
    extend: {},
  },
  plugins: [],
}