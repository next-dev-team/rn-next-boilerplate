import React, { ReactNode } from 'react';
import { StyleProp, Text as RnText, TextProps, TextStyle } from 'react-native';
import { useTailwind } from '_app/store/useTailwind';

type ITextBg = {
  children: ReactNode;
  className?: string;
  style?: StyleProp<TextStyle>;
} & TextProps;

/**
 * TextBg will not change text color by default
 * net to put color manual
 */
const TextBg = ({ children, className = '', style, ...rest }: ITextBg) => {
  const twStyle = useTailwind().twStyle;

  return (
    <RnText style={[twStyle(`text-white ${className}`), style]} {...rest}>
      {children}
    </RnText>
  );
};
export default TextBg;
