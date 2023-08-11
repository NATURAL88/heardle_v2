/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      'noto': ['Roboto', 'Arial', 'sans-serif']
    },
    fontSize: {
      '3xl': ['32px', {
        lineHeight: '36px',
        letterSpacing: '-0.04em'
      }]
    }
  },
  plugins: [],
}

