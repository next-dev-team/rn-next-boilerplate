import { CusBox, CusText } from 'components';
import Button from 'components/Button';
import GridView from 'components/List/GridView';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import FastImage from 'react-native-fast-image';
import useKitten from './useKittenList';

const KittenList = () => {
  const { spacing } = useAppTheme();
  const { kittenList, navigateKittenItem } = useKitten();
  const cardOuterHeight = 150;

  return (
    <GridView<typeof kittenList[0]>
      data={kittenList}
      numColumns={1}
      renderItem={({ item }) => {
        return (
          <Button
            borderWidth={1}
            height={cardOuterHeight}
            onPress={() => navigateKittenItem(item)}
            marginHorizontal="xs"
            borderRadius="s"
            alignItems="center"
          >
            <CusBox
              bg="bgSubdued"
              height={cardOuterHeight - 45}
              m="s"
              mb="xxs"
              alignSelf="stretch"
              borderRadius="s"
              justifyContent="center"
              alignItems="center"
            >
              <FastImage style={{ height: '100%', width: '100%' }} source={{ uri: item?.img }} />
            </CusBox>
            <CusText variant="body" color="fgRegular">
              {item?.name}
            </CusText>
          </Button>
        );
      }}
      bottomSpacing={spacing.m}
      rightSpacing={spacing.s}
      keyExtractor={(_, i) => String(i)}
    />
  );
};

export default KittenList;
