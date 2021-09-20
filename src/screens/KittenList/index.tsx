import { CusBox, Spinning } from 'components';
import React from 'react';
import { selKittenStatus } from 'store/kittenSlice';
import { useAppSelector } from 'store/useStore';
import KittenFilter from './kittenFilter';
import KittenList from './kittenList';

const KittenListScreen = () => {
  const kittenStatus = useAppSelector(selKittenStatus);

  return (
    <CusBox paddingHorizontal="s" paddingVertical="s">
      <Spinning visible={kittenStatus === 'loading'} />
      <KittenFilter />
      <CusBox style={{ paddingBottom: 130 }}>
        <KittenList />
      </CusBox>
    </CusBox>
  );
};

export default KittenListScreen;
