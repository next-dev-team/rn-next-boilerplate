import { CusBox, CusText } from 'components/atoms';
import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native';

export type ButtonProps = React.ComponentProps<typeof CusBox> & {
  onPress?: () => void;
  label?: string;
  children?: ReactNode;
  labelProps?: React.ComponentProps<typeof CusText>;
};

const Button = ({ onPress, label, children, labelProps, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
