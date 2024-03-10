/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brightred: "#FF3232",
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
