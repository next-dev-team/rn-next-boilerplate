import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { Fallback } from 'components/atoms/Fallback';
import Spinning from 'components/atoms/Spinning';
import 'i18n/index';
import { configure } from 'mobx';
import { linking } from 'navigation/linking';
import { navigationRef } from 'navigation/NavigationService';
import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { darkTheme, lightTheme } from 'themes';
import AppNavigation from '../navigation/AppNavigation';

const App = () => {
  configure({
    enforceActions: 'never',
    computedRequiresReaction: false,
    reactionRequiresObservable: false,
    observableRequiresReaction: false,
  });

  return (
    <Suspense fallback={null}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider theme={false ? darkTheme : lightTheme}>
            <PersistGate loading={<Spinning visible />} persistor={persistor}>
              <NavigationContainer linking={linking} ref={navigationRef} fallback={<Fallback />}>
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
