const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['_site/*.html','_site/**/*.html', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),

    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
      'logo1': '#4FA3DA',
      'logo2': '#BD6BAB',
      'yellow1': '#F8B025',
      'green1': '#60B946',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}
