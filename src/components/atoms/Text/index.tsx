import React, { ReactNode } from 'react';
import { StyleProp, Text as RnText, TextProps, TextStyle } from 'react-native';
import { useTheme } from '_app/store/useTheme';

type IText = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

const Text = ({ children, className = '', style, ...rest }: IText) => {
  const { twStyle } = useTheme();

  return (
    <RnText style={[twStyle(`text-black dark:text-white ${className}`), style]} {...rest}>
      {children}
    </RnText>
  );
};
export default Text;
