import { ThemeProvider } from '@shopify/restyle';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { darkTheme, lightTheme } from 'themes';
import AppNavigation from '../navigation/AppNavigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={false ? darkTheme : lightTheme}>
            <AppNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
