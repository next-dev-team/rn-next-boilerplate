import { StackNavigationOptions } from '@react-navigation/stack';
import { CusBox, CusText } from 'components/atoms';
import Header from 'components/atoms/Layout/Header';
import React from 'react';

const RenderHeader = () => {
  return (
    <Header
      center={
        <CusBox flexDirection="row">
          <CusText>Kitten List- </CusText>
        </CusBox>
      }
    />
  );
};
const KittenListOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenListOption;
