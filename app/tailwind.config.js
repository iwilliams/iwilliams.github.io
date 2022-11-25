/*global module*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,js,hbs,css}'
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(100%, 0, 0)' },
          '100%': { transform: 'translate3d(-100%, 0, 0)' },
        }
      },
      backgroundSize: {
        'stretch': '100% 100%'
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    }
  }
}
