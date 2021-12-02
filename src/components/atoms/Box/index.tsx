import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { tw } from 'utils';

type IBoxVariant = 'touchOpacity' | 'view' | 'scroll';
export type IBox = {
  children?: ReactNode;
  className?: string;
  variant?: IBoxVariant;
  touchOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
  touchOpacityProps?: TouchableOpacityProps;
} & Partial<Pick<TouchableOpacityProps, 'onPress'> & ViewProps>;

const Box = ({
  variant = 'view',
  touchOpacity,
  children,
  className = '',
  onPress,
  touchOpacityProps,
  style,
  ...rest
}: IBox) => {
  const viewBox = (
    <View style={[tw.style(` ${className}`), style]} {...rest}>
      {children}
    </View>
  );

  const scrollViewBox = (
    <ScrollView style={[tw.style(className), style]} {...rest}>
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

export default Box;
