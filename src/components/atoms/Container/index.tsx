import { useAppTheme } from 'hooks/useTheme';
import * as React from 'react';
import { ScrollViewProps, StatusBar, StatusBarProps, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box, { BoxProps } from '../Box';

export type ContainerProps = {
  hasHeader?: true;
  children: React.ReactNode;
  content?: BoxProps;
  statusBarProps?: StatusBarProps;
  scrollStyle?: ScrollViewProps;
  type: 'view' | 'scroll';
};

export const Container = (props: ContainerProps) => {
  const { hasHeader = true, children, statusBarProps, content, type = 'view', scrollStyle } = props;
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.white },
  });

  return (
    <SafeAreaView style={styles.container} edges={hasHeader ? ['left', 'right', 'bottom'] : ['left', 'right']}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent {...statusBarProps} />
      {type === 'view' ? <Box {...content}>{children}</Box> : <ScrollView style={scrollStyle}>{children}</ScrollView>}
    </SafeAreaView>
  );
};
