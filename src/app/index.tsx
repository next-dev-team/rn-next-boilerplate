import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { Spinning } from 'components';
import { Fallback } from 'components/Fallback';
import 'i18n/index';
import { navigationRef } from 'navigation/NavigationService';
import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { darkTheme, lightTheme } from 'themes';
import AppNavigation from '../navigation/AppNavigation';

const App = () => {
  return (
    <Suspense fallback={null}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={false ? darkTheme : lightTheme}>
            <PersistGate loading={<Spinning visible />} persistor={persistor}>
              <NavigationContainer ref={navigationRef} fallback={<Fallback />}>
                <AppNavigation />
              </NavigationContainer>
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
