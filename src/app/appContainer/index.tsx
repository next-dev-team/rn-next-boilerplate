// import { useFlipper } from '@react-navigation/devtools';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { delay } from 'lodash';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, ContainerRoot } from '_app/components/atoms';
import { AppNavigation, linkingApp, navigationRef } from '_app/navigation';
import { useSettingsStore } from '_app/store';
import { useApp } from './useApp';

const NavigationRoot = ({ isReady }: { isReady: boolean }) => {
  const { twColor } = useApp();

  if (isReady) {
    return (
      <Box className="h-full w-full bg-primary justify-center items-center">
        <ActivityIndicator color={twColor(`text-white`)} size="large" />
      </Box>
    );
  }
  return (
    <ContainerRoot>
      <AppNavigation />
    </ContainerRoot>
  );
};

const AppContainer = ({}) => {
  const [isReady, setIsReady] = React.useState(true);
  const { darkMode } = useSettingsStore();
  // useFlipper(navigationRef);

  return (
    <NavigationContainer
      theme={darkMode ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      fallback={<ActivityIndicator />}
      linking={linkingApp}
      onReady={() => {
        delay(() => {
          setIsReady(false);
        }, 300);
      }}
    >
      <NavigationRoot isReady={isReady} />
    </NavigationContainer>
  );
};

export default AppContainer;
