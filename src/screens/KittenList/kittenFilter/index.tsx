import { CusBox } from 'components';
import Button from 'components/Button';
import GridView from 'components/List/GridView';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import useKittenFilter from './useKittenFilter';

const KittenFilter = () => {
  const { spacing } = useAppTheme();
  const { filterData, onSetFilterValue, filterValue } = useKittenFilter();
  return (
    <CusBox pb="l">
      <GridView<typeof filterData[0]>
        data={filterData}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <Button
              borderWidth={1}
              bg={item.value === filterValue ? 'fgSuccess' : 'fgSubdued'}
              height={45}
              onPress={() => onSetFilterValue(item.value)}
              alignItems="center"
              justifyContent="center"
              marginHorizontal="xs"
              borderRadius="s"
              label={String(item?.value)}
              labelProps={{ color: 'fgContrasting' }}
            />
          );
        }}
        bottomSpacing={spacing.s}
        rightSpacing={spacing.s}
        keyExtractor={(_, i) => String(i)}
      />
    </CusBox>
  );
};

export default KittenFilter;
