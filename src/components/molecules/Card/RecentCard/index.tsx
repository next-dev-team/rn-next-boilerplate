import { CusBox, CusButton, CusText, Flex } from 'components/atoms';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import FastImage from 'react-native-fast-image';

export const ResentCard = ({
  data,
  onPress,
}: {
  data: PostsApi.Datum;
  onPress: ((v: PostsApi.Datum) => void) | undefined;
}) => {
  const { borderRadii, colors } = useAppTheme();

  if (!data) return null;
  return (
    <CusButton onPress={() => onPress?.(data)} height={120} borderRadius="m" flexDirection="row" mb="xl">
      <FastImage
        source={{ uri: data?.img }}
        style={{ width: 120, height: ' 100%', borderRadius: borderRadii.m, backgroundColor: colors.background }}
      />
      <CusBox flex={1} justifyContent="space-between">
        <CusText variant="pageHead" pl="s" numberOfLines={3} lineHeight={28}>
          {data?.title}
        </CusText>
        <Flex justifyContent="space-between">
          <CusText variant="body" fontWeight="bold" textTransform="uppercase" color="func500" pl="s" numberOfLines={3}>
            {data?.date}
          </CusText>
          <CusText variant="body" fontWeight="bold" textTransform="uppercase" color="func500" pl="s" numberOfLines={3}>
            {data?.hour}h ago
          </CusText>
        </Flex>
      </CusBox>
    </CusButton>
  );
};
