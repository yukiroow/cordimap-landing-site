/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",   // Small devices
      md: "768px",   // Tablets
      lg: "1279px",  // Small desktops
      xl: "1280px",  // Desktops and up
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
