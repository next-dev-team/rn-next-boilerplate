import * as React from 'react';
import { StatusBarProps } from 'react-native';
import Box, { BoxProps } from '../Box';

export type SectionProps = {
  isFull?: true;
  children: React.ReactNode;
  content?: BoxProps;
  statusBarProps?: StatusBarProps;
};

export const Section = (props: SectionProps) => {
  const { isFull, children, ...rest } = props;

  return (
    <Box p={isFull ? 'none' : 'l'} pb="none" {...rest}>
      {children}
    </Box>
  );
};
