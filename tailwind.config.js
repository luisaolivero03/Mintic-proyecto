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
          '50': '#f0fdf3',
          '100': '#ddfbe4',
          '200': '#bdf5cb',
          '300': '#89eca4',
          '400': '#4eda74',
          '500': '#26c150',
          '600': '#1a9f3e',
          '700': '#167330',
          '800': '#18632e',
          '900': '#165127',
          '950': '#062d12',
        },
        secondary: {
          
        }
      }
    },
  },
  plugins: [],
}