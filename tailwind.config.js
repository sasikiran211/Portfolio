/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        obsidian: {
          DEFAULT: '#0C0C0C',
          light: '#141414',
          card: '#101010',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        lime: {
          DEFAULT: '#CCFF00',
          hover: '#B5E600',
          glow: 'rgba(204, 255, 0, 0.35)',
          muted: 'rgba(204, 255, 0, 0.15)',
        },
        emerald: {
          DEFAULT: '#10B981',
          glow: 'rgba(16, 185, 129, 0.3)',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        text: {
          primary: '#EBEBEB',
          secondary: 'rgba(235, 235, 235, 0.60)',
          muted: 'rgba(235, 235, 235, 0.30)',
        },
        glass: {
          bg: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.10)',
          highlight: 'rgba(255, 255, 255, 0.06)',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px rgba(204, 255, 0, 0.25)',
        'lime-glow-lg': '0 0 45px rgba(204, 255, 0, 0.35)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.25)',
        'glass-card': '0 20px 50px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(204, 255, 0, 0.05)',
      },
      borderRadius: {
        'shell': '2.5rem',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(204, 255, 0, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
