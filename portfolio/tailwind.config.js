/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F1EA',
        ink: '#171512',
        charcoal: '#1A1815',
        rust: '#B15E3B',
        'rust-light': '#F1E4DA',
        sage: '#3F6B4A',
        'sage-light': '#E3EEE3',
        stone: '#8A8577',
        hairline: '#E4DFD5',
        'hairline-dark': '#33312C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
