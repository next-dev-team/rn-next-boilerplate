import { ThemeProvider } from '@shopify/restyle';
import { Spinning } from 'components';
import 'i18n/index';
import React, { Suspense } from 'react';
import 'react-native-gesture-handler';
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
              <AppNavigation />
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
