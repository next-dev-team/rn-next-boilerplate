import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native';
import { tw } from 'utils';

type IBoxVariant = 'touchOpacity' | 'box';
type IBox = {
  children?: ReactNode;
  className?: string;
  variant?: IBoxVariant;
  touchOpacity?: boolean;
  style?: StyleProp<ViewStyle>;
} & Partial<TouchableOpacityProps & ViewProps>;

const Box = ({ variant = 'box', touchOpacity, children, className = '', style, ...rest }: IBox) => {
  const boxNoneTouch = (
    <View style={[tw.style(className.replace(/^flex?$/, 'flex-row')), style]} {...rest}>
      {children}
    </View>
  );
  const renderBox = {
    touchOpacity: (
      <TouchableOpacity activeOpacity={0.8} {...rest}>
        {boxNoneTouch}
      </TouchableOpacity>
    ),
    box: boxNoneTouch,
  } as Record<IBoxVariant, any>;

  return renderBox?.[touchOpacity ? 'touchOpacity' : variant] || null;
};

export default Box;
