/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headings: ["Universo", "sans-serif"],
        body: ["Epilogue", "sans-serif"],
        mono: ["Courier Prime", "monospace"],
      },
    },
  },
  plugins: [],
};
