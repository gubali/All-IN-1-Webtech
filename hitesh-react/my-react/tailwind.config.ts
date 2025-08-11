/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", "dark"], // ✅ correct dark mode setting
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
