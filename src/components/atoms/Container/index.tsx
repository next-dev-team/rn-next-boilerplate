import { useAppTheme } from 'hooks/useTheme';
import * as React from 'react';
import { ScrollViewProps, StatusBar, StatusBarProps, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box, { BoxProps } from '../Box';
import Spinning, { SpinningProps } from '../Spinning';

export type ContainerProps = {
  hasHeader?: true;
  children: React.ReactNode;
  content?: BoxProps;
  statusBarProps?: StatusBarProps;
  barStyle?: StatusBarProps['barStyle'];
  scrollStyle?: ScrollViewProps;
  type: 'view' | 'scroll';
  spinningProps?: Partial<SpinningProps>;
  spinning?: SpinningProps['visible'];
};

export const Container = (props: ContainerProps) => {
  const {
    hasHeader = true,
    children,
    statusBarProps,
    content,
    type = 'view',
    scrollStyle,
    spinningProps,
    spinning,
    barStyle = 'default',
  } = props;
  const theme = useAppTheme();
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.white },
  });

  return (
    <SafeAreaView style={styles.container} edges={hasHeader ? ['left', 'right', 'bottom'] : ['left', 'right']}>
      <Spinning visible={spinning} {...spinningProps} />
      <StatusBar barStyle={barStyle} backgroundColor="white" translucent animated {...statusBarProps} />
      {type === 'view' ? <Box {...content}>{children}</Box> : <ScrollView style={scrollStyle}>{children}</ScrollView>}
    </SafeAreaView>
  );
};
