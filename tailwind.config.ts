import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
        "white":"#ffffff",
        "black":"#000000",
        "pink": {
          "light":"#f8bfb2",
          "dark": "#d77057",
        },
        "purple":{
          "light":"#d5cac5",
          "dark": "#625c6f",
        },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'bebas': ['Bebas Neue Regular', 'sans-serif'],
        'poppins': ['Poppins Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;