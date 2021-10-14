import { CusText } from 'components/atoms';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Container } from '../Container';

export function Fallback() {
  const theme = useAppTheme();
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating size="large" color={theme.colors.primary100} />
        <CusText>Loading...</CusText>
      </View>
    </Container>
  );
}
