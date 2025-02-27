/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "1rem", // Add padding like Bootstrap's container
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
          "2xl": "1320px", // This matches Bootstrap's 'xxl' container
        },
      },
      colors: {
        primary: "#f67116",
        secondary: "#171717",
        "gradient-red": "#9c3512",
      },
    },
  },
  plugins: [],
};
