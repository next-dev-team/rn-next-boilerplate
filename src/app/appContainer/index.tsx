import { useFlipper } from '@react-navigation/devtools';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, Linking, Platform } from 'react-native';
import { Box, Container } from '_app/components/atoms';
import { isDev } from '_app/constants';
import AppNavigation from '_app/navigation/appNavigation';
import { linkingApp } from '_app/navigation/linking';
import { navigationRef } from '_app/navigation/navigationService';
import { getItem } from '_app/utils';
import { useApp } from './useApp';
const AppContainer = () => {
  const { twColor } = useApp();
  useFlipper(navigationRef);
  const [isReady, setIsReady] = React.useState(isDev ? false : true);
  const [, setInitialState] = React.useState();
  const PERSISTENCE_KEY = 'NAVIGATION_STATE';

  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await getItem(PERSISTENCE_KEY);
          const state = savedStateString ? JSON.parse(savedStateString) : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <Box className="h-full w-full bg-primary justify-center items-center">
        <ActivityIndicator color={twColor(`text-white`)} size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer ref={navigationRef} fallback={<ActivityIndicator />} linking={linkingApp}>
      <Container>
        <AppNavigation />
      </Container>
    </NavigationContainer>
  );
};

export default AppContainer;
