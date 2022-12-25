/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "search-icon": "url('./assets/icons8-search-24.png')",
      },
      colors: {
        primary: {
          50: "#E8EBE2",
          100: "#D3D9C7",
          200: "#A8B38F",
          300: "#869465",
        },
        secondary: {
          50: "rgba(33, 88, 44, 0.633)",
          100: "#007B21",
          200: "#21582C",
        },
        success: "#89C617",
        info: "#23ACDD",
        warning: "#F2D326",
        danger: "#FF8560",
      },
      clipPath: {
        myPolygon: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
        polygonPhone: "polygon(0 0,0 100%,100% 0)",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
