/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f3f4f8',
          100: '#e2e4ef',
          200: '#c2c6dc',
          300: '#9499bc',
          400: '#6b7099',
          500: '#4c5078',
          600: '#383c5e',
          700: '#272a47',
          800: '#1b1d35',
          900: '#121426',
          950: '#08091a',
        },
        xp: {
          400: '#fcd34d',
          500: '#f5b942',
          600: '#e29a1f',
        },
        ai: {
          400: '#c4a4ff',
          500: '#a374ff',
          600: '#8348f0',
        },
        tools: {
          400: '#67e8f9',
          500: '#22d3ee',
          600: '#0ea5c4',
        },
        rarity: {
          common: '#9aa3b8',
          rare: '#4cb6f0',
          epic: '#b265f0',
          legendary: '#f5a623',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      boxShadow: {
        'glow-xp': '0 0 18px 2px rgba(245, 185, 66, 0.45)',
        'glow-ai': '0 0 18px 2px rgba(163, 116, 255, 0.45)',
        'glow-tools': '0 0 18px 2px rgba(34, 211, 238, 0.4)',
        'glow-legendary': '0 0 24px 4px rgba(245, 166, 35, 0.5)',
        'glow-epic': '0 0 20px 3px rgba(178, 101, 240, 0.45)',
        'glow-rare': '0 0 16px 2px rgba(76, 182, 240, 0.4)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};