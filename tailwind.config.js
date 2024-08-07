/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21243D", // Text color 
        accent: "#EA1D5D", // Pink for hover effect 
      },
    },
  },
  plugins: [],
};
