import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { Fallback } from 'components/atoms/Fallback';
import 'i18n/index';
import { configure } from 'mobx';
import { linking } from 'navigation/linking';
import { navigationRef } from 'navigation/NavigationService';
import React, { Suspense } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { darkTheme, lightTheme } from 'themes';
import AppNavigation from '../navigation/AppNavigation';

// if (__DEV__) {
//   spy(createMobxDebugger());
// }

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
        <ThemeProvider theme={false ? darkTheme : lightTheme}>
          <NavigationContainer linking={linking} ref={navigationRef} fallback={<Fallback />}>
            <AppNavigation />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </Suspense>
  );
};

export default App;
