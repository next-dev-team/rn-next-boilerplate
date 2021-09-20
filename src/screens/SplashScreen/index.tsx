import { CusBox, CusText } from 'components';
import React from 'react';
import useSplashScreen from './useSplash';

const SplashScreen = () => {
  useSplashScreen();
  return (
    <CusBox bg="bgRegular" flex={1} justifyContent="center" alignItems="center">
      <CusText variant="subheader">Loading...</CusText>
    </CusBox>
  );
};

export default SplashScreen;
