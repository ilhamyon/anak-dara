/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 4px #000000',
        '4xl': '0px 0px 6px #ffffff',
      }
    },
  },
  plugins: [],
}

