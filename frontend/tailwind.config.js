/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'slyellow' : '#F3F0E7',
      'create' : '#C89D6F',
      'edit' : '#F5E5D5',
      'del' : '#B69991'
    },
  },
  plugins: [],
}