/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      darkMode: ['selector', '[data-mode="dark"]'],
      backgroundImage: {
        'vertical-gradient-md': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 50%, #f1f5f9 50%, #f1f5f9 100%)',
        'vertical-gradient': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 73%, #f1f5f9 73%, #f1f5f9 100%)'
      },
    },
  },
  plugins: [],
}

