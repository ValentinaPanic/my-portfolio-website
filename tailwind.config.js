/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        dark: "rgba(17, 24, 39,1)",
        light: "#E4E3EC",
      },
      backgroundImage: {
        circuralLight: 'repeating-radial-gradient(rgb(56 189 248)  2px,#E4E3EC 4px, #E4E3EC 90px);',
        circuralDark: 'repeating-radial-gradient(rgb(56 189 248) 2px,rgba(51,65,85) 4px, rgba(51,65,85) 110px);'
      }
    },
  },
  plugins: [],
}