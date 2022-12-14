/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: [
          'Mulish',
          'sans-serif',
        ],
        poppins: [
          'Poppins'
        ]
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
