/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        magenta: {
          400: '#e879f9',
          500: '#d946ef',
        }
      },
      fontFamily: {
        'mono': ['Courier New', 'Monaco', 'monospace'],
      }
    },
  },
  plugins: [],
}