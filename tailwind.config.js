/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{php,js,html}"],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#1061FF',
        'blue': '#349DFD',
        'blue-table': '#002C9D',
        'unselect': '#BAC5E7',
        'stroke': '#81B7E9',
        'tet': '#001458',
        'tet-x': '#5A5A5A',
      },
      boxShadow: {
        nav: '2px 2px 50px 1px rgba(179, 185, 191, 0.1);',
        side: ' 0px 5px 10px rgba(0, 0, 0, 0.05);',
        stable: ' 0px 3px 4px rgba(0, 0, 0, 0.25);',
      }
    },
  },
  plugins: [],
}