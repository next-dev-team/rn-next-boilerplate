# 🚀 rn-next-boilerplate

[![React Native](https://img.shields.io/badge/React%20Native-v0.65.1-green.svg)](https://facebook.github.io/react-native/) [![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v6.0.2-blue.svg)](https://reactnavigation.org/)

KittenApp is React Native application. This project is configured with redux, redux thunk with redux-tookit and redux persist. Uses latest version of react-navigation (v6) and using Restyle for type-enforced system to design UI components

## Technologies Use

- [Typescript 4](https://www.typescriptlang.org/) support.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation 6](https://reactnavigation.org/) theming support.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [Tailwind Css React Native](https://www.npmjs.com/package/tailwind-react-native-classnames) - TailwindCSS + React Native, written in TypeScript
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

# Tailwind intellisense

```js
// vs code setting.json
  "tailwindCSS.experimental.classRegex": [
    ["tw\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["tw1\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["tw2\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["tw3\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    // suggection for props name include  Cls="bg-blue-700"
    ["Cls=[\"'`]([^\"'`]*)"],
    ["Clx=[\"'`]([^\"'`]*)"],
    ["className:.[\"'`]([^\"'`]*)"],
    ["className:[\"'`]([^\"'`]*)"],
    ["className:.clx\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    "tw`([^`]*)",
    "tw\\.style\\(`([^)]*)`\\)",
    "tw\\.style\\(`([^)]*)\\)",
    "twColor\\(`([^)]*)`\\)"
  ],
```

## Getting Started

1. Clone this repo, `https://github.com/rimsila/kitten-app.git`
2. Go to project's root directory, `cd kitten-app`
3. Run `yarn` to install dependencies
4. Run `yarn pod or yarn pod m1` to install pod on ios
5. Start developments:

   - On Android:
     - Run `react-native run-android` or Use Android Studio (Recommended)
   - On iOS:
     - Run `yarn react-native run-ios` Or
     - Open `yarn xcode` in Xcode
     - Hit `Run` after selecting the desired device

6. Enjoy!!!
