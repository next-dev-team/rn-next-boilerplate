import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';
import { CusBox, CusText } from '_app/components/atoms';

export type ButtonProps = React.ComponentProps<typeof CusBox> & {
  onPress?: () => void;
  activeOpacity?: number;
  label?: string;
  children?: ReactNode;
  labelProps?: React.ComponentProps<typeof CusText>;
};

const Button = ({ onPress, label, children, labelProps, activeOpacity = 0.6, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
      <CusBox {...rest}>
        {typeof label === 'string' ? (
          <CusText variant="button" {...labelProps}>
            {label}
          </CusText>
        ) : (
          children
        )}
      </CusBox>
    </TouchableOpacity>
  );
};

export default Button;
