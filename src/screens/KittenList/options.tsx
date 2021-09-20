import { StackNavigationOptions } from '@react-navigation/stack';
import { CusBox, CusText } from 'components';
import CusHeader from 'navigation/components/CusOption';
import React from 'react';
import { selKittenList } from 'store/kittenSlice';
import { useAppSelector } from 'store/useStore';

const RenderHeader = () => {
  const kittenList = useAppSelector(selKittenList);

  return (
    <CusHeader
      center={
        <CusBox flexDirection="row">
          <CusText color="bgRegular">Kitten List- </CusText>
          <CusText color="bgRegular">{kittenList.length} items</CusText>
        </CusBox>
      }
    />
  );
};
const KittenListOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenListOption;
