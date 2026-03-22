import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cc: {
          navy: '#10162f',
          blue: '#3a10e5',
          yellow: '#ffd300',
          pink: '#f65d8a',
          teal: '#66c4ff',
          gray: {
            50: '#f7f7f8',
            100: '#eeeeef',
            200: '#d9d9e2',
            800: '#1d233e',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        DEFAULT: '4px',
        'md': '8px',
        'lg': '12px',
      }
    },
  },
  plugins: [],
} satisfies Config;