import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, Container } from '_app/components/atoms';
import AppNavigation from '_app/navigation/appNavigation';
import { useApp } from './useApp';

const AppContainer = ({ ready }: { ready: boolean }) => {
  const { twColor } = useApp();

  return (
    <Container>
      {ready && (
        <Box className="h-full w-full bg-primary justify-center items-center">
          <ActivityIndicator color={twColor('text-white')} size="large" />
        </Box>
      )}
      <AppNavigation />
    </Container>
  );
};

export default AppContainer;
