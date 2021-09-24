import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useRestyle,
} from '@shopify/restyle';
import React, { forwardRef, ReactNode } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { AppTheme } from 'themes';
import FlexItem from './FlexItem';

const restyleFunctions = [spacing, border, backgroundColor, layout];

type FlexProps = SpacingProps<AppTheme> &
  BorderProps<AppTheme> &
  LayoutProps<AppTheme> &
  BackgroundColorProps<AppTheme> & { style?: StyleProp<ViewStyle>; children?: ReactNode };

const Flex = forwardRef<View, FlexProps>(({ children, ...restProps }, ref) => {
  const props = useRestyle(restyleFunctions, {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...restProps,
  });

  return (
    <View ref={ref} {...props}>
      {children}
    </View>
  );
});

export default Object.assign(Flex, { Item: FlexItem });
