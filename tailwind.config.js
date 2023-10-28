/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "normal": "rgb(23 23 23)"
      }
    },
    fontFamily: {
      'noto': ['Roboto', 'Arial', 'sans-serif']
    },
    fontSize: {
      '3xl': ['32px', {
        lineHeight: '36px',
        letterSpacing: '-0.04em'
      }],
      'sm': ['0.875rem', '1.25rem']
    }
  },
  plugins: [],
}

