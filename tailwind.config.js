/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    extend: {
      colors: {
        coralRed: '#FF6F61',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-fixed'
  ]
}

