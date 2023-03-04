/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans"],
      serif: ["Space Mono", "serif"],
      mono: ["Space Mono", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
