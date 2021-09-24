import { CusText } from 'components';
import { Container } from 'components/Container';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function Fallback() {
  const theme = useAppTheme();
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating size="large" color={theme.colors.fgRegular} />
        <CusText>Loading...</CusText>
      </View>
    </Container>
  );
}
