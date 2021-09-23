import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppTheme } from 'themes';

export const Container: React.FC<{ hasHeader?: boolean }> = ({ hasHeader = true, children }) => {
  const theme = useTheme<AppTheme>();
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.fgContrasting },
  });

  return (
    <SafeAreaView style={styles.container} edges={hasHeader ? ['left', 'right', 'bottom'] : ['left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {children}
    </SafeAreaView>
  );
};
