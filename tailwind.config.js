/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        custom: "Manrope",
      },
      colors: {
        grayishBlue: "hsl(217, 19%, 38%)",
        cyan: "hsl(193, 38%, 86%)",
        green: "hsl(150, 100%, 66%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
      letterSpacing: {
        more: ".35em",
      },
    },
  },
  plugins: [],
};
