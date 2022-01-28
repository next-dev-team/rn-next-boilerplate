const colors = require('tailwindcss/colors');

/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', '/src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {},
      colors: {
        cyan: colors.cyan,
        primary: colors.green[400],
        primary600: colors.green[600],
        success: colors.green[400],
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        dark: colors.black,
        light: colors.white,
        gradient: {
          from: '#3a7bd5',
          to: 'rgba(196, 196, 196, 0.6)',
        },
      },
      fontSize: {
        //font - line-height
        caption: [12, '20px'],
        xs: [12, 0],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
