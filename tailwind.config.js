/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1D22',
        dark: {
          DEFAULT: '#1A1D22',
          100: '#2C3036', // Lighter dark background
          200: '#3E444C', // Even lighter dark background
          300: '#21252B', // Card background
          400: '#0F1012', // Darker dark background
          500: '#050505', // Darkest dark background
        },
        text: {
          primary: '#E0E0E0', // Primary text
          secondary: '#B3B3B3', // Secondary text
          accent: '#FFFFFF', // Accent text
        },
        danger: {
          DEFAULT: '#E57373', // Danger color
          border: '#FFCDD2', // Danger border
        },
        highlight: '#101115', // Highlight
        shadow: '#2B2F38', // Shadow
        green: {
          DEFAULT: '#1CB150', // Default green
        },
        gray: {
          light: '#CCCCCC', // Light gray
        },
        foreground: 'hsl(var(--foreground))',
        btn: {
          background: 'hsl(var(--btn-background))',
          'background-hover': 'hsl(var(--btn-background-hover))',
        },
      },
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Card shadow
      },
    },
  },
  plugins: [],
}
