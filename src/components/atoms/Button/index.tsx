import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Text } from '_app/components/atoms';

export type ButtonProps = React.ComponentProps<typeof Box> & {
  onPress?: () => void;
  activeOpacity?: number;
  label?: string;
  children?: ReactNode;
  labelProps?: React.ComponentProps<typeof Text>;
};

const Button = ({ onPress, label, children, labelProps, activeOpacity = 0.6, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <Box {...rest}>{typeof label === 'string' ? <Text {...labelProps}>{label}</Text> : children}</Box>
    </TouchableOpacity>
  );
};

export default Button;
