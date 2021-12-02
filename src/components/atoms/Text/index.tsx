import React, { ReactNode } from 'react';
import { StyleProp, Text as RnText, TextProps, TextStyle } from 'react-native';
import { tw } from 'utils';

type IText = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

const Text = ({ children, className = '', style, ...rest }: IText) => {
  return (
    <RnText style={[tw.style(` ${className}`), style]} {...rest}>
      {children}
    </RnText>
  );
};
export default Text;
