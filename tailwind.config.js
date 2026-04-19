/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0891B2",
        secondary: "#22D3EE",
        cta: "#059669",
        background: "#ECFEFF",
        text: "#164E63",
      },
      fontFamily: {
        heading: ["Figtree", "sans-serif"],
        body: ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
        'soft': '-5px -5px 15px rgba(255, 255, 255, 0.8), 5px 5px 15px rgba(8, 145, 178, 0.1)',
        'soft-inner': 'inset -5px -5px 15px rgba(255, 255, 255, 0.8), inset 5px 5px 15px rgba(8, 145, 178, 0.1)',
      }
    },
  },
  plugins: [],
}
