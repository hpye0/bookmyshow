module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        man: {
          50: "#f5e5ff",
          100: "#dfb4fb",
          200: "#cb82f9",
          300: "#b751f9",
          400: "#a326f8",
          500: "#8a14df",
          600: "#6b0dad",
          700: "#4c077b",
          800: "#2d034a",
          900: "#0f001a",
        },
        navCol: {
          50: "#efeffd",
          100: "#d0d3e4",
          200: "#b2b5cd",
          300: "#9397b8",
          400: "#757aa3",
          500: "#5b6089",
          600: "#464b6b",
          700: "#32354d",
          800: "#2b3148",
          900: "#070b16",
        },
        redpinkbutton: {
          50: "#ffe2ec",
          100: "#ffb3c5",
          200: "#fc839f",
          300: "#f84464",
          400: "#f62252",
          500: "#dd0939",
          600: "#ad032c",
          700: "#7c001e",
          800: "#4d0012",
          900: "#200005",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
