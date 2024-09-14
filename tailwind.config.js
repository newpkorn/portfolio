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
    function ({ addComponents }) {
      addComponents({
        '.fade-enter': {
          opacity: '0',
          transform: 'scale(0.95)',
        },
        '.fade-enter-active': {
          opacity: '1',
          transform: 'scale(1)',
          transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
        },
        '.fade-exit': {
          opacity: '1',
          transform: 'scale(1)',
        },
        '.fade-exit-active': {
          opacity: '0',
          transform: 'scale(0.95)',
          transition: 'opacity 300ms ease-in-out, transform 300ms ease-in-out',
        },
      });
    },
  ],
}