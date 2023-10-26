/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        userPrimary: "hsl(238, 40%, 52%)",
        userPrimaryVariant: "hsl(239, 57%, 85%)",
        userDanger: "hsl(358, 79%, 66%)",
        userDangerVariant: "hsl(357, 100%, 86%)",
        userDarkBlue: "hsl(212, 24%, 26%)",
        userGrayishBlue: "hsl(211, 10%, 45%)",
        userLightGrey: "hsl(223, 19%, 93%)",
        userVeryLightGrey: "hsl(228, 33%, 97%)",
      },
    },
  },
  plugins: [],
}