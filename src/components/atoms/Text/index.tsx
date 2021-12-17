import { useCreation } from 'ahooks';
import React, { ReactNode } from 'react';
import { StyleProp, Text as RnText, TextProps, TextStyle } from 'react-native';
import { tw } from '_app/utils';

type IText = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

const Text = ({ children, className = '', style, ...rest }: IText) => {
  const twStyle = useCreation(() => [tw.style(`${className}`), style], []);

  return (
    <RnText style={twStyle} {...rest}>
      {children}
    </RnText>
  );
};
export default Text;
