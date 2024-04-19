/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'main': "'Lexend Deca', sans-serif"
      },

      animation: {
        transitionBg: 'transitionBg ease-in infinite alternate-reverse'
      },

      keyframes: {
        transitionBg: {
          '0%': {
            backgroundPositionX: '0%'
          },

          '100%': {
            backgroundPositionX: '100%'
          }
        }
      },

      colors: {
        'bg-color-one': '#437A66',
        'bg-color-two': '#1B2339',
        'header-color': '#292929'
      },

      backgroundSize: {
        '500%': '500% 100%'
      },

      backgroundPosition: {
        'header': 'top -10rem'
      },

      backgroundColor: {
        'darken': 'rgba(0,0,0,0.6)'
      },
    },
  },
  plugins: [],
}

