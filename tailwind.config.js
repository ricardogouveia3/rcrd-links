// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/barro-ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        quartz: {
          50:  '#070707',
          100: '#0f0f0f',
          200: '#1e1e1e',
          300: '#2c2c2c',
          400: '#3b3b3b',
          500: '#4a4a4a',
          600: '#6e6e6e',
          700: '#929292',
          800: '#b7b7b7',
          900: '#dbdbdb',
          950: '#ededed',
        },
        flame: '#e97051',
      },
      backgroundImage: {
        'noise-dark': "url('./assets/noise-dark.webp')",
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
