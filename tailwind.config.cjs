/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E8EBE2",
          100: "#D3D9C7",
          200: "#A8B38F",
          300: "#869465",
        },
        secondary: {
          100: "#007B21",
          200: "#21582C",
        },
        success: "#89C617",
        info: "#23ACDD",
        warning: "#F2D326",
        danger: "#FF8560",
      },
    },
  },
  plugins: [],
};
