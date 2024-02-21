/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      "white":"#ffffff",
      "black":"#000000",
      "pink":{
        "light":"#f8bfb2",
        "dark": "d77057",
      },
      "purple":{
        "light":"#d5cac5",
        "dark": "625c6f",
      },
    },
    extend: {},
  },
  plugins: [],
}

