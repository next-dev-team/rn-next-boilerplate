import { CusBox, CusText, Flex } from 'components/atoms';
import { BoxProps } from 'components/atoms/Box';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { SCREEN_HEIGHT } from 'utils/dimension';
import { fakerData } from 'utils/mockData';
import { convertToHttps } from 'utils/string';

export type PostCardProps = BoxProps & {
  data: PostsApi.Datum;
};
export const PostCard = (props: PostCardProps) => {
  const { data, ...rest } = props;

  const { borderRadii } = useAppTheme();
  const hg = SCREEN_HEIGHT * 0.61;
  return (
    <CusBox height={hg} bg="primary100" borderRadius="m" borderWidth={1} borderColor="gray200" {...rest}>
      <FastImage
        source={{ uri: convertToHttps(fakerData().random.image()) }}
        style={{ width: '100%', height: '100%', borderRadius: borderRadii.m, justifyContent: 'flex-end' }}
      >
        <CusBox bg="white" height={SCREEN_HEIGHT * 0.26} pt="m" p="l" m="l" mb="m" borderRadius="m">
          <CusText variant="pageHead" numberOfLines={2} mb="s">
            {data?.title}
          </CusText>
          <CusText variant="caption" numberOfLines={3} mb="m">
            {data?.body}
          </CusText>

          <Flex justifyContent="space-between">
            <CusText fontWeight="bold" variant="body" textTransform="uppercase" color="func500">
              {data?.user_id}
            </CusText>
            <CusText variant="body" fontSize={16} fontWeight="bold" textTransform="uppercase" color="gray300">
              {data?.id}
            </CusText>
          </Flex>
        </CusBox>
      </FastImage>
    </CusBox>
  );
};
