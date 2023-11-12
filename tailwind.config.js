/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
      },
      boxShadow: {
        mainPageShadow: "0px 10px 70px 5px rgba(180,83,9,0.3)"
      }
    },
  },
  plugins: [],
}