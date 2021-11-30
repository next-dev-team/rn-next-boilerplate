module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
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
        caption: [6, 0],
        xs: [12, 0],
        sm: [14, 0],
        base: [16, 0],
        lg: [18, 0],
        xl: [20, 0],
        '2xl': [24, 0],
        '3xl': [30, 0],
        '4xl': [36, 0],
        '5xl': [48, 0],
        '6xl': [60, 0],
        '7xl': [72, 0],
        '8xl': [96, 0],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
