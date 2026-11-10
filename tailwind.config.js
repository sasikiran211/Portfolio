/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#EEE8DF',
          light: '#F7F4EF',
          dark: '#E2D9CC',
        },
        beige: {
          DEFAULT: '#C4BCB0',
          light: '#D7D1C7',
          dark: '#ADA395',
        },
        ocean: {
          DEFAULT: '#2C365A',
          light: '#3C4977',
          dark: '#1C243F',
          muted: '#4D5980',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(44, 54, 90, 0.06)',
        'card': '0 10px 30px -4px rgba(44, 54, 90, 0.08)',
        'elevated': '0 20px 40px -6px rgba(44, 54, 90, 0.12)',
      },
      borderRadius: {
        'refined': '1rem',
      }
    },
  },
  plugins: [],
}
