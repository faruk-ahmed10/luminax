const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",   
    "./layouts/**/*.{js,ts,jsx,tsx}",   
    "./landing/**/*.{js,ts,jsx,tsx}",   
  ],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'sans': ['Jost', ...defaultTheme.fontFamily.sans],
        'home': ['Space Grotesk']
      },
      colors: {
        "dark": "#040415",
        "dark-gray": "#111121",
        "dark-pri": "#777E90",
        "dark-sec": "#FFDAAE",
        "dark-ter": "#CDB4DB",
        "dark-white": "#F8F8F9",
        "dark-black": "#040415",
      },
      fontSize: {
        "tiny": "0.625rem",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
