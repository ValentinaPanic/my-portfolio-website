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
        circuralLightMd: 'repeating-radial-gradient(rgb(56 189 248)  2px,#E4E3EC 4px, #E4E3EC 70px);',
        circuralLightSm: 'repeating-radial-gradient(rgb(56 189 248)  2px,#E4E3EC 4px, #E4E3EC 60px);',
        circuralDark: 'repeating-radial-gradient(rgb(56 189 248) 2px,rgba(51,65,85) 4px, rgba(51,65,85) 110px);'
      },
      boxShadow: {
        mainPageShadow: "0px 10px 70px 5px rgba(180,83,9,0.3)"
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}