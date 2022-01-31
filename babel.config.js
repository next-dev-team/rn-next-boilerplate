module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
        'transform-remove-console',
        [
          'import',
          {
            libraryName: 'lodash',
            libraryDirectory: '',
            camel2DashComponentName: false, // default: true
          },
          'lodash',
        ],
        [
          '@babel/plugin-transform-react-jsx',
          {
            runtime: 'automatic',
          },
        ],
      ],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@': './src',
          _assets: './assets',
        },
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.jsx', '.js', '.json'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
