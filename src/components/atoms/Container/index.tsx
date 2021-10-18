import { useAppTheme } from 'hooks/useTheme';
import { omit } from 'lodash';
import * as React from 'react';
import { ScrollViewProps, StatusBar, StatusBarProps, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Box, { BoxProps } from '../Box';
import Spinning, { SpinningProps } from '../Spinning';

export type ContainerProps = {
  hasHeader?: true;
  children: React.ReactNode;
  viewProps?: BoxProps;
  statusBarProps?: StatusBarProps;
  barStyle?: StatusBarProps['barStyle'];
  scrollViewProps?: ScrollViewProps;
  type: 'view' | 'scroll';
  spinningProps?: Partial<SpinningProps>;
  spinning?: SpinningProps['visible'];
};

export const Container = (props: ContainerProps) => {
  const {
    hasHeader = true,
    children,
    statusBarProps,
    viewProps,
    type = 'view',
    scrollViewProps,
    spinningProps,
    spinning,
    barStyle = 'default',
  } = props;
  const theme = useAppTheme();

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.white },
    scrollView: {
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={[styles.container]} edges={hasHeader ? ['left', 'right', 'bottom'] : ['left', 'right']}>
      <Spinning visible={spinning} {...spinningProps} />
      <StatusBar barStyle={barStyle} translucent animated {...statusBarProps} />
      {type === 'view' ? (
        <Box {...viewProps}>{children}</Box>
      ) : (
        <ScrollView style={[styles.scrollView, scrollViewProps?.style]} {...omit(scrollViewProps, 'style')}>
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
