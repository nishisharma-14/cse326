/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-primary': '#000000',
        'gold': '#FFD700',           // gold-primary hex
        'gold-metallic': '#D4AF37',  // gold-metallic hex
        'gold-accent': '#FFB100',    // gold-accent hex
      },
    },
  },
  plugins: [],
}
