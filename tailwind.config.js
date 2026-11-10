/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        persian: {
          DEFAULT: '#1C39BB',
          hover: '#152C94',
          dark: '#12247A',
          light: '#2A49DC',
          subtle: '#EEF2FF',
          border: 'rgba(28, 57, 187, 0.2)',
        },
        dark: {
          bg: '#080808',
          surface: '#111113',
          card: '#161618',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(255, 255, 255, 0.16)',
        },
        light: {
          bg: '#FAFAFB',
          surface: '#FFFFFF',
          card: '#FFFFFF',
          border: '#E5E7EB',
          borderHover: '#D1D5DB',
        }
      },
      fontFamily: {
        heading: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'card-light': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-dark': '0 10px 30px -4px rgba(0, 0, 0, 0.5)',
        'persian-glow': '0 4px 20px rgba(28, 57, 187, 0.25)',
      }
    },
  },
  plugins: [],
}
