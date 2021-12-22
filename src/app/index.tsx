import { NavigationContainer } from '@react-navigation/native';
import React, { Suspense, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import I18n from '_app/i18n/index';
import { navigationRef } from '_app/navigation/navigationService';
import { TailwindProvider } from '_app/store/useTheme';
import AppContainer from './appContainer';

const App = () => {
  const [ready, setReady] = useState(true);
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={I18n}>
        <Suspense fallback={null}>
          <TailwindProvider>
            <NavigationContainer
              ref={navigationRef}
              fallback={<ActivityIndicator />}
              onReady={() => {
                setTimeout(() => {
                  setReady(false);
                }, 800);
              }}
            >
              <AppContainer ready={ready} />
            </NavigationContainer>
          </TailwindProvider>
        </Suspense>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
