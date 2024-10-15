/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tacao' : '#F0AA7B',
        'midnight-blue' : '#2C279A',
        'fire-brick' : '#A81F3D',
        'matte-black': '#0A0A0A',
        'light':'#FAFAFA',
      },
      fontFamily: {
        regular: ['Regular'],
        medium: ['Medium'],
        demibold: ['Demibold'],
        bold: ['Bold'],
        extrabold: ['Extrabold'],
        heavy: ['Heavy'],
        regularItalic: ['RegularItalic'],
        mediumItalic: ['MediumItalic'],
        demiboldItalic: ['DemiboldItalic'],
        boldItalic: ['BoldItalic'],
        extraboldItalic: ['ExtraboldItalic'],
        heavyItalic: ['HeavyItalic'],
      }
    },
  },
  plugins: [],
}