/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f6f6f7',
          100: '#e1e3e6',
          200: '#c2c5cb',
          300: '#9ca1ab',
          400: '#757b87',
          500: '#585f6d',
          600: '#444a57',
          700: '#363b46',
          800: '#2b2f37',
          900: '#24272d',
          950: '#1a1c21',
        },
      },
      backdropBlur: {
        'glass': '10px',
      },
    },
  },
  plugins: [],
};