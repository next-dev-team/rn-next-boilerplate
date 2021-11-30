import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render as rtlRender } from '@testing-library/react-native';
import React, { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';

function render(ui: any, { ...options } = {}) {
  // @ts-ignore
  const Wrapper = ({ children }): ComponentType => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react-native';
// override React Testing Library's render with our own
export { render };

const Stack = createStackNavigator();

export const renderWithNavigation = ({ screens = {}, navigatorConfig = {} } = {}) =>
  render(
    <NavigationContainer>
      <Stack.Navigator {...navigatorConfig}>
        {Object.keys(screens).map(name => (
          // @ts-ignore
          <Stack.Screen key={name} name={name} component={screens[name]} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
