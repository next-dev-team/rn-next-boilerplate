# 🚀 rn-next-boilerplate

[![React Native](https://img.shields.io/badge/React%20Native-v0.65.1-green.svg)](https://facebook.github.io/react-native/) [![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v6.0.2-blue.svg)](https://reactnavigation.org/)

KittenApp is React Native application. This project is configured with redux, redux thunk with redux-tookit and redux persist. Uses latest version of react-navigation (v6) and using Restyle for type-enforced system to design UI components

## Technologies Use

- [Typescript 4](https://www.typescriptlang.org/) support.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation 6](https://reactnavigation.org/) theming support.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [Shopify restyle](https://github.com/Shopify/restyle) - library for building UI libraries with theming support
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Axios](https://github.com/axios/axios)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

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

## Demo Feature

- Have two screen:
  - KittenList: List with random kitten images with randomly generated names.
  - KittenItem: view kitten detail
- KittenList Screen:
  - On application startup all images retrieved from kitten API then combine with randomly name and description with loading indicator while images are being fetched to display in list is empty will show empty message.
  - User can filter number to displayed kitten list (30/50/100)
  - Show Online/Offline on Header right
  - Show specific count specify count of displayed kitten items in header with title
- KittenItem Screen:

  - header with go back and title
  - in Kitten item screen render kitten image at the top followed by it’s name and display kitten description below (Lorem Ipsum).

- BONUS
  - Generate signed .apk file, release version in root folder: [app-release.apk](https://github.com/rimsila/kitten-app/blob/main/app-release.apk)
  - Write tests for some react-native component and utils
  - Store kitten data in redux state and support offline mode and auto refetch when online
