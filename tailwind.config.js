/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      heading: ['Outfit', 'sans-serif'],
      body: ['Sora', 'sans-serif'],
      doto:['Doto', 'sans-serif'],
    },
    },
    
  },
  plugins: [],
}
