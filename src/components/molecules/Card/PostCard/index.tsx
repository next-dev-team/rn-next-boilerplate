import { CusBox, CusButton, CusText, Flex } from 'components/atoms';
import { ButtonProps } from 'components/atoms/Button';
import { useAppTheme } from 'hooks/useTheme';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { px } from 'utils/dimension';
import { fakerData } from 'utils/mockData';

export type PostCardProps = ButtonProps & {
  data: PostsApi.Datum;
};
export const PostCard = (props: PostCardProps) => {
  const { borderRadii } = useAppTheme();
  const { data, ...rest } = props;

  const cardHg = px(400);
  const subCardHg = px(180);

  return (
    <CusButton
      height={cardHg}
      bg="primary100"
      borderRadius="m"
      borderWidth={1}
      borderColor="gray200"
      activeOpacity={1}
      {...rest}
    >
      <FastImage
        source={{ uri: data?.img }}
        style={{ width: '100%', height: '100%', borderRadius: borderRadii.m, justifyContent: 'flex-end' }}
      >
        {/* --------- sub-card ------*/}
        <CusBox bg="white" height={subCardHg} pt="m" pb="s" p="l" m="l" mb="m" borderRadius="m">
          <CusBox flex={1}>
            <CusText variant="pageHead" numberOfLines={2} mb="s">
              {data?.title}
            </CusText>
            <CusText variant="body" numberOfLines={3} mb="m">
              {data?.body}
            </CusText>
          </CusBox>
          <Flex justifyContent="space-between">
            <CusText fontWeight="bold" variant="body" textTransform="uppercase" color="func500">
              {fakerData().date.future().toLocaleDateString()}
            </CusText>
            <CusText variant="body" fontSize={16} fontWeight="bold" textTransform="uppercase" color="gray300">
              No: {data?.id}
            </CusText>
          </Flex>
        </CusBox>
      </FastImage>
    </CusButton>
  );
};
