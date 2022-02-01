import { RecyclerFlatList } from '@/components/atoms/list/recyclerFlatList';
import { useTheme } from '@/store';
import { getRandomData } from '@/utils/data/lorem';
import ProgressiveImage from '@freakycoder/react-native-progressive-fast-image';
import React from 'react';

export function RecyclerFlatListTemplate() {
  const { tw } = useTheme();
  return (
    <RecyclerFlatList
      itemHeight={260}
      gap={10}
      numColumns={2}
      data={getRandomData(2000)}
      keyExtractor={i => String(i)}
      renderItem={({ item, index }) => {
        return (
          <ProgressiveImage
            key={index}
            style={tw`h-screen w-screen`}
            source={{ uri: item.imageUrl }}
            thumbnailSource={{ uri: item.imageUrl }}
            loadingImageStyle={{
              width: 50,
              height: 50,
              alignSelf: 'center',
            }}
            blurRadius={1}
            imageAnimationDuration={2000}
            loadingSource={{
              uri: 'https://github.com/WrathChaos/react-native-progressive-fast-image/blob/master/example/assets/loading3.gif?raw=true',
            }}
          />
        );
      }}
    />
  );
}
