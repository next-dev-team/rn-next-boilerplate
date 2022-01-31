import { useTheme } from '@/store/useTheme';
import React, { ReactNode } from 'react';
import {
  ScrollView,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

type IBoxVariant = 'touchOpacity' | 'view' | 'scroll';
export type IBox = {
  children?: ReactNode;
  className?: string;
  variant?: IBoxVariant;
  touchOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
  touchOpacityProps?: TouchableOpacityProps;
} & Partial<Pick<TouchableOpacityProps, 'onPress'> & ViewProps>;

export const Box = ({
  variant = 'view',
  touchOpacity,
  children,
  className = '',
  onPress,
  touchOpacityProps,
  style,
  ...rest
}: IBox) => {
  const { twStyle } = useTheme();

  const viewBox = (
    <View style={[twStyle(`${className}`), style]} {...rest}>
      {children}
    </View>
  );

  const scrollViewBox = (
    <ScrollView style={[twStyle(className), style]} {...rest}>
      {children}
    </ScrollView>
  );

  const renderBox = {
    touchOpacity: (
      <TouchableOpacity activeOpacity={0.8} {...{ onPress, touchOpacityProps }}>
        {viewBox}
      </TouchableOpacity>
    ),
    view: viewBox,
    scroll: scrollViewBox,
  } as Record<IBoxVariant, any>;

  return renderBox?.[touchOpacity ? 'touchOpacity' : variant] || null;
};
