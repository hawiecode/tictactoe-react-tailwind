/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-cherry':'#BA1B1D',
        'red-ore':'#F24333',
        'grey-red':'#564D4A',
        'white-soft':'#F7F4F3',
        'onion-pupple':'#5B2333',
      }
    },
  },
  plugins: [],
}
