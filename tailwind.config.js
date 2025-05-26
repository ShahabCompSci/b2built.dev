/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1D1B4C", // main blue-purple
          dark: "#15133A",    // hover / darker variant
        },
      },
    },
  },
  plugins: [],
};
