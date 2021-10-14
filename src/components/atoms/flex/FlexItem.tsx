import { border, BorderProps, layout, LayoutProps, spacing, SpacingProps, useRestyle } from '@shopify/restyle';
import React, { FC } from 'react';
import { View } from 'react-native';
import { AppTheme } from 'themes';

const restyleFunctions = [spacing, border, layout];

type FlexItemProps = SpacingProps<AppTheme> & BorderProps<AppTheme> & Omit<LayoutProps<AppTheme>, 'width'>;

const FlexItem: FC<FlexItemProps> = ({ children, ...restProps }) => {
  const props = useRestyle(restyleFunctions, {
    flex: 1,
    justifyContent: 'center',
    ...restProps,
  });
  return <View {...props}>{children}</View>;
};

export default FlexItem;
