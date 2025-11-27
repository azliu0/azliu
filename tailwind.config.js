/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brightred: "#FF3232",
        warmgrey: "#FCFCFA",
        warmgreyhover: "#F7F7F2",
        warmred: "#C84A4A",
        warmreddark: "#A83A3A",
      },
    },
    screens: {
      md: "640px",
    },
    fontFamily: {
      jetbrains: ["JetBrains Mono"],
    },
  },
  plugins: [],
};
