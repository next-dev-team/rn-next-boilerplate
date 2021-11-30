import { NavigationContainer } from '@react-navigation/native';
import 'i18n/index';
import { navigationRef } from 'navigation/NavigationService';
import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/store';
import { useDeviceContext } from 'twrnc';
import { tw } from 'utils/tailwind';
import AppNavigation from '../navigation/AppNavigation';

const App = () => {
  useDeviceContext(tw);
  return (
    <Suspense fallback={null}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigationRef} fallback={null}>
              <AppNavigation />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
