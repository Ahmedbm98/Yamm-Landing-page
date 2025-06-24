/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1000px",
        xl: "1080px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#9D6CFF",
        secondary: "#27364C",
        bgFooter: "#f9f5ff",
        txtGray: "#4B5563",
      },
    },
  },
  plugins: [],
};
