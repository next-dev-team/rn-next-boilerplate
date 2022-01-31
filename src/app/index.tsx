import I18n from '@/i18n';
import { TailwindProvider } from '@/store';
import { PortalProvider } from '@gorhom/portal';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContainer from './appContainer';
import './logBox';

const App = () => {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={I18n}>
        <Suspense fallback={null}>
          <TailwindProvider>
            <PortalProvider>
              <AppContainer />
            </PortalProvider>
          </TailwindProvider>
        </Suspense>
      </I18nextProvider>
    </SafeAreaProvider>
  );
};

export default App;
