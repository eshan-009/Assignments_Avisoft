/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'lvh': '100lvh',  // Large viewport height
        'svh': '100svh',  // Small viewport height
        'dvh': '100dvh',  // Dynamic viewport height
      },
      width: {
        'lvw': '100lvw',  // Large viewport width
        'svw': '100svw',  // Small viewport width
        'dvw': '100dvw',  // Dynamic viewport width
      }
    },
  },
  plugins: [],
}

