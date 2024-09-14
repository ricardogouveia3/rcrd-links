/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'quartz': {
        l90: "#ededed",
        l80: "#dbdbdb",
        l70: "#c9c9c9",
        l60: "#b7b7b7",
        l50: "#a5a5a5",
        l40: "#929292",
        l30: "#808080",
        l20: "#6e6e6e",
        l10: "#5c5c5c",
        DEFAULT: "#4a4a4a",
        d10: "#434343",
        d20: "#3b3b3b",
        d30: "#343434",
        d40: "#2c2c2c",
        d50: "#252525",
        d60: "#1e1e1e",
        d70: "#161616",
        d80: "#0f0f0f",
        d90: "#070707",
      },
      'flame': {
        l90: "#fcede9",
        l80: "#f9dbd4",
        l70: "#f7c9be",
        l60: "#f4b7a8",
        l50: "#f1a693",
        l40: "#ee947d",
        l30: "#eb8267",
        l20: "#e97051",
        l10: "#e65e3c",
        DEFAULT: "#4a4a4a",
        d10: "#cc4422",
        d20: "#b63d1e",
        d30: "#9f351b",
        d40: "#882e17",
        d50: "#722613",
        d60: "#5b1e0f",
        d70: "#44170b",
        d80: "#2d0f08",
        d90: "#170804",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        mono: [
          'SFMono-Regular',
          'Consolas',
          'Liberation Mono',
          'Menlo',
          'Courier',
          'monospace'
        ],
      },
    },
  },
  plugins: [],
}

