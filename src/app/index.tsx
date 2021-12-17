import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useAppColorScheme, useDeviceContext } from 'twrnc';
import '_app/i18n/index';
import AppNavigation from '_app/navigation/AppNavigation';
import { navigationRef } from '_app/navigation/NavigationService';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { persistor, store } from '_app/store/store';
import { tw } from '_app/utils/tailwind';

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
