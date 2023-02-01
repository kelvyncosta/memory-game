/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#F9FAFB',
          200: '#E2E8F0',
          400: '#A8ABAE',
          700: '#2D3138',
          800: '#161B22',
          900: '#0D1117',
        },
      },
      gridTemplateRows: {
        layout: '64px 1fr 64px',
      },
      boxShadow: {
        hard: '6px 6px 0 #000',
        'hard-active': '2px 2px 0 #000',
      },
    },
  },
  plugins: [],
};
