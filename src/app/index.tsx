import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Box } from '_app/components/atoms';
import '_app/i18n/index';
import AppNavigation from '_app/navigation/AppNavigation';
import { navigationRef } from '_app/navigation/NavigationService';
import { TailwindProvider, useTailwind } from '_app/store/useTailwind';

const RootApp = ({ ready }: { ready: boolean }) => {
  const { twColor } = useTailwind();
  return (
    <>
      {ready && (
        <Box className="h-full w-full bg-primary justify-center items-center">
          <ActivityIndicator color={twColor('text-white')} size="large" />
        </Box>
      )}
      <AppNavigation />
    </>
  );
};

const App = () => {
  const [ready, setReady] = useState(true);

  return (
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        fallback={<ActivityIndicator />}
        onReady={() => {
          setTimeout(() => {
            setReady(false);
          }, 800);
        }}
      >
        <TailwindProvider>{<RootApp ready={ready} />}</TailwindProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
