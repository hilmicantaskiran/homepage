const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Inter', ...fontFamily.sans]
        },
      },
    variants: {
      extend: {}
    },
    plugins: [
      require('@tailwindcss/typography'),
    ]
  }
}