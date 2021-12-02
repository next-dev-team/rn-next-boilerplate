/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
const pxToRem = px => {
  return `${px / 16}rem`;
};

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {},
      colors: {
        primary: '#8257E5',
        success: '#1DB863',
        black: '#666666',
        dark: '#B2B2B2',
        light: '#EBEBEB',
        white: '#FFFFFF',
        gradient: {
          from: 'rgba(196, 196, 196, 0.24)',
          to: 'rgba(196, 196, 196, 0)',
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
