/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          'scrollbar-width': 'none', // Hides scrollbar in Firefox
        },
        '.custom-scrollbar::-webkit-scrollbar': {
          display: 'none', // Hides scrollbar in WebKit browsers (Chrome, Safari)
        },
      });
    },
  ],
};
