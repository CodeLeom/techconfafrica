/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,}"],
  theme: {
    // colors: {
    //   customGreen: {
    //     light: "#60efff",
    //     DEFAULT: "#00DD75",
    //   },
    //   customOrange: {
    //     light: "#F89B29",
    //     DEFAULT: "#FF0F7B",
    //   },
    //   customCyan: {
    //     light: "#D0FFD6",
    //     DEFAULT: "##06AED4",
    //   },
    // },
    fontFamily: {
      body: ["Inter Variable", "sans-serif"],
      sans: ["Inter Variable", "sans-serif"],
    },
  },
};
