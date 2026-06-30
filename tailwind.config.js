/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#060606',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#242424',
          500: '#333333',
          400: '#555555',
          300: '#777777',
          200: '#aaaaaa',
          100: '#dddddd',
        },
        signal: '#00FF41',
        'signal-dim': '#00C830',
        'signal-dark': '#003d10',
        'signal-muted': 'rgba(0,255,65,0.12)',
        'signal-border': 'rgba(0,255,65,0.2)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'reveal-up': {
          '0%': { clipPath: 'inset(100% 0 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0% 0 0 0)', opacity: '1' },
        },
        'signal-pulse': {
          '0%, 100%': { boxShadow: '0 0 8px rgba(0,255,65,0.4)' },
          '50%': { boxShadow: '0 0 24px rgba(0,255,65,0.9), 0 0 48px rgba(0,255,65,0.3)' },
        },
        'scan-line': {
          '0%': { top: '-2px' },
          '100%': { top: '100%' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'reveal-up': 'reveal-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'signal-pulse': 'signal-pulse 2s ease-in-out infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};
