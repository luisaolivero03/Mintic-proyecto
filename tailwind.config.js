/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#243c4c', //azul borde
          '100': '#d5f6e3',
          '200': '#afebcb',
          '300': '#7adbae',
          '400': '#44c38d',
          '500': '#ffffff', //blanco
          '600': '#14875b',
          '700': '#117552',
          '800': '#0f563d',
          '900': '#0d4734',
          '950': '#06281e',
        },
      }
    },
  },
  plugins: [],
}