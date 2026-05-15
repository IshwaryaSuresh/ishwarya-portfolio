/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', '"Times New Roman"', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Aligned with src/index.css design tokens
        ink:           '#0D0D0D',
        paper:         '#FAFAFA',
        muted:         '#666666',
        accent:        '#008080',
        'accent-light':'#C2FFFF',
        'accent-soft': '#61C0C0',
        border:        '#E6E6E6',
      },
    },
  },
  plugins: [],
}
