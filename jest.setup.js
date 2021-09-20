/* eslint-disable no-undef */
import { jest } from '@jest/globals';
import '@testing-library/jest-native/extend-expect';
import { server } from './src/test/mocks/server';
// https://github.com/vanGalilea/react-native-testing/tree/master/__tests__

jest.useFakeTimers();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
global.console = {
  // log: jest.fn(), // console.log are ignored in tests

  // Keep native behaviour for other methods, use those to print out things in your own tests, not `console.log`
  error: console.error,
  // warn: console.warn,
  info: console.info,
  debug: console.debug,
};

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: () => null,
    Directions: {},
  };
});

//establish api mocking before all tests
beforeAll(() => server.listen());

beforeEach(() => {
  global.fetch = jest.fn((...args) => {
    console.warn('global.fetch needs to be mocked in tests', ...args);
    throw new Error('global.fetch needs to be mocked in tests');
  });
});

//clean up after the tests are finished
afterAll(() => server.close());

afterEach(() => {
  global.fetch.mockRestore();
  //reset any requests handlers that we may add during the tests,
  //so they don't affect other tests.
  server.resetHandlers();
});
