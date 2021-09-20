import { CusBox, CusText } from 'components';
import React from 'react';
import { ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image';
import useKittenItem from './useKittenItem';

const KittenItem = () => {
  const { routes } = useKittenItem();
  const { description, img, name } = routes?.params?.state || {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <CusBox pb="l">
        <FastImage source={{ uri: img }} style={{ height: 200, width: '100%' }} />
        <CusBox padding="l">
          <CusText variant="subheader" color="fgRegular">
            {name}
          </CusText>
          <CusBox mb="l" />
          <CusText>{description}</CusText>
        </CusBox>
      </CusBox>
    </ScrollView>
  );
};

export default KittenItem;
