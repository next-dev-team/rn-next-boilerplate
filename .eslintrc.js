module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:react/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true,
    useJSXTextNode: true,
  },
  rules: {
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'no-shadow': 'off',
    'react/no-deprecated': 'off',
    'o-mixed-requires': 'off',
    'no-mixed-requires': 'off',
    'no-restricted-modules': 'off',
    'no-path-concat': 'off',
    'no-new-require': 'off',
    'handle-callback-err': 'off',
    'no-catch-shadow': 'off',
    'no-negated-in-lhs': 'off',
    '@typescript-eslint/no-explicit-any': 0,
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/prop-types': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'react/display-name': 'off',
    "import/no-duplicates": ["error", { "considerQueryString": true }]
  },
};
