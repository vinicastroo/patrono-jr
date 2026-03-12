import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#7A0101',
          dark:    '#4a0000',
          deeper:  '#2a0000',
          light:   '#9e0202',
        },
        cream: {
          DEFAULT: '#FFF7E6',
          dark:    '#F5EDDA',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#e4c97a',
        },
      },
      fontFamily: {
        display: ['Belianty', 'Didot', 'Bodoni MT', 'Georgia', 'serif'],
        impact:  ['Coolvetica', 'Impact', 'Arial Black', 'sans-serif'],
        body:    ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
