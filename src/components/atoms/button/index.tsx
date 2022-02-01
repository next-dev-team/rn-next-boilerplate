import { Box, IBox, Text, TextBg } from '@/components/atoms';
import { clx } from '@/utils';
import React, { isValidElement, ReactNode } from 'react';

export type ButtonProps = React.ComponentProps<typeof Box> & {
  onPress?: () => void;
  activeOpacity?: number;
  label?: string;
  children?: ReactNode;
  labelProps?: React.ComponentProps<typeof Text>;
  labelCls?: string;
};

const Button = ({ onPress, label, labelCls = '', children, labelProps, className, ...rest }: ButtonProps & IBox) => {
  return (
    <Box touchOpacity onPress={onPress} className={clx(`px-2 py-4 rounded-full`, className)} {...rest}>
      {typeof label === 'string' || !isValidElement(children) ? (
        <TextBg className={`capitalize px-4 text-center ${labelCls}`} {...labelProps}>
          {label || children}
        </TextBg>
      ) : (
        children
      )}
    </Box>
  );
};

export default Button;
