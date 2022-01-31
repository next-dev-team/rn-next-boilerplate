import { useTheme } from '@/store';
import React, { ReactNode } from 'react';
import { StyleProp, Text as RnText, TextProps, TextStyle } from 'react-native';

type IText = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

const Text = ({ children, className = '', style, ...rest }: IText) => {
  const { tw } = useTheme();

  return (
    <RnText style={[tw`text-black dark:text-white ${className}`, style]} {...rest}>
      {children}
    </RnText>
  );
};
export default Text;
