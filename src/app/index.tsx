import { NavigationContainer } from '@react-navigation/native';
import 'i18n/index';
import { navigationRef } from 'navigation/NavigationService';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSettingsStore } from 'store/settings/useSettingsStore';
import { persistor, store } from 'store/store';
import { useAppColorScheme, useDeviceContext } from 'twrnc';
import { tw } from 'utils/tailwind';
import AppNavigation from '../navigation/AppNavigation';

const App = () => {
  useDeviceContext(tw, { withDeviceColorScheme: false });

  const [_, toggleColorScheme, setColorSchemeApp] = useAppColorScheme(tw);

  const { colorScheme, setColorScheme } = useSettingsStore();

  useEffect(() => {
    setColorScheme(colorScheme as any);
    setColorSchemeApp(colorScheme as any);
  }, [colorScheme]);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigationRef} fallback={null}>
            <AppNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
