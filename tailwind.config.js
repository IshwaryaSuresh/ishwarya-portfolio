/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111111',
        paper: '#F7F6F3',
        muted: '#6B7280',
        accent: '#1D4ED8',
        'accent-light': '#EFF6FF',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
}
