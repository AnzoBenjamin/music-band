/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      primary: "#633388",
      secondary: "#844AD5",
      accent: "#FF9933",
      blue: {
        900: "#0C0F1B",
      },
    },

    fontFamily: {
      heading: "MyHelvetica",
      body: "MyHelveticaNeue",
    },

    extend: {
      backgroundImage: {
        hero: "linear-gradient( to right, rgba(0,0,0,0.78), rgba(0,0,0,0.78)),url('./src/assets/hero.png')",
        nav: "linear-gradient(to top, rgba(12, 15, 27, .8), #000000)",
        album:
          "linear-gradient( to bottom, rgba(0,0,0,.98), rgba(0,0,0,0.78),rgba(0,0,0,.68), rgba(0,0,0,0.68),rgba(0,0,0,.78), rgba(0,0,0,0.98)),url('./src/assets/latest-album.png')",
      },
    },
  },
  plugins: [],
};
