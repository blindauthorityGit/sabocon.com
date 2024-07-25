/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sanity/**/*.{js,ts,jsx,tsx}', // Include this if Tailwind CSS is used in Sanity studio files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
