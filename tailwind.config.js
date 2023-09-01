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
        circuralLight: 'repeating-radial-gradient(rgba(180,83,9,0.3) 2px,#E4E3EC 3px, #E4E3EC 90px);',
        circuralDark: 'repeating-radial-gradient(rgba(180,83,9,0.3) 2px,#6B7280 3px, #6B7280 110px);'
      }
    },
  },
  plugins: [],
}