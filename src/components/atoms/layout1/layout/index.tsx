import React from 'react';
import { Box } from '../..';

//for common use and need to change it base on screen
export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return <Box>{children}</Box>;
};
