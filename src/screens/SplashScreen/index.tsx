import { CusBox, CusText } from 'components/atoms';
import React from 'react';
import useSplashScreen from './useSplash';

const SplashScreen = () => {
  useSplashScreen();
  return (
    <CusBox bg="primary100" flex={1} justifyContent="center" alignItems="center">
      <CusText variant="subHead" color="black">
        Loading...
      </CusText>
    </CusBox>
  );
};

export default SplashScreen;
