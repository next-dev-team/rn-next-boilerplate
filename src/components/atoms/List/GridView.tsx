import { getGridItemMarginRight, getGridItemWidth, SCREEN_WIDTH } from '@/utils/devices/dimension';
import React from 'react';
import { FlatList, FlatListProps, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';

export interface IGridViewProps<T> extends FlatListProps<T> {
  numColumns?: number;
  bottomSpacing?: number;
  rightSpacing?: number;
  containerStyle?: StyleProp<ViewStyle>;
  childContainerStyle?: StyleProp<ViewStyle>;
  renderItem: ListRenderItem<T>;
  containerWidth?: number;
  isLoading?: boolean;
}

function GridView<T>(props: IGridViewProps<T>) {
  const {
    bottomSpacing,
    rightSpacing = 0,
    numColumns = 2,
    containerStyle,
    renderItem,
    containerWidth = SCREEN_WIDTH,
    ...rest
  } = props;

  const itemWidth = getGridItemWidth({ numColumns, containerWidth, spacing: rightSpacing });

  const renderCustomItem: ListRenderItem<T> = ({ item, index, separators }) => {
    return (
      <View
        style={[
          { marginRight: getGridItemMarginRight({ numColumns, index, spacing: rightSpacing }), width: itemWidth },
          props.childContainerStyle,
        ]}
      >
        {renderItem({ item, index, separators })}
      </View>
    );
  };

  return (
    <>
      <FlatList<T>
        // ListEmptyComponent={
        //   <>
        //     <CusBox justifyContent="center" alignItems="center">
        //       <FastImage source={require('assets/images/cambodia-flag.webp')} style={{ width: 100, height: 100 }} />
        //       <CusText color="gray400">There is no data</CusText>
        //     </CusBox>
        //   </>
        // }
        numColumns={numColumns}
        style={[containerStyle]}
        ItemSeparatorComponent={() => <View style={{ height: bottomSpacing }} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        {...rest}
        renderItem={renderCustomItem}
      />
    </>
  );
}

export default GridView;
