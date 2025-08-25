/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "480px",   // small devices
      md: "768px",   // tablets
      lg: "1279px",  // small desktops
      xl: "1280px",  // desktops and up
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
