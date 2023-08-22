/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "rgb(var(--color-white) / <alpha-value>)",
        black: "rgb(var(--color-black) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        gray1: "rgb(var(--color-gray1) / <alpha-value>)",
        gray2: "rgb(var(--color-gray2) / <alpha-value>)",
        gray3: "rgb(var(--color-gray3) / <alpha-value>)",
        gray4: "rgb(var(--color-gray4) / <alpha-value>)",
        gray5: "rgb(var(--color-gray5) / <alpha-value>)",
        redAccent: "rgb(var(--color-redAccent) / <alpha-value>)",
        greenAccent: "rgb(var(--color-greenAccent) / <alpha-value>)",
        greenAccent: "rgb(var(--color-greenAccent) / <alpha-value>)",
        lightBG: "rgb(var(--color-lightBG) / <alpha-value>)",
        gradientEnd: "rgb(var(--color-gradientEnd) / <alpha-value>)",
        gradientStart: "rgb(var(--color-gradientStart) / <alpha-value>)",
        bgPrimary: "rgb(var(--color-bgPrimary) / <alpha-value>)",
        footerBg: "rgb(var(--color-footerBg) / <alpha-value>)",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      screens: {
        maxSm: { max: "391px" },
        sm: "390px",
        // => @media (min-width: 390px)
        lg: "1440px",
        // => @media (min-width: 1440px)
        xl: "1920px",
        // => @media (min-width: 1920px)
      },
    },
  },
  plugins: [],
};
