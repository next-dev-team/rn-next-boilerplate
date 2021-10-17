import { CusBox, CusButton, CusText, Flex } from 'components/atoms';
import { Section } from 'components/atoms/Section';
import SvgIcon from 'components/atoms/svg-icon';
import omit from 'lodash/omit';
import { AppStackParams } from 'navigation/AppNavigation';
import { goBack } from 'navigation/NavigationService';
import React from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { postStore } from 'store';
import { px } from 'utils/dimension';

export type PostDetailProps = AppStackParams['PostDetail'] & Pick<typeof postStore, 'postDetail'>;

export const PostDetail = (props: PostDetailProps) => {
  const { postDetail, state } = props;

  return (
    <>
      <FastImage source={{ uri: state?.img }} style={{ width: '100%', height: px(320) }}>
        <CusBox bg="mask1" height="100%">
          <CusBox
            {...omit(StyleSheet.absoluteFill, 'bottom')}
            pointerEvents="box-none"
            flexDirection="row"
            marginTop="xl"
            padding="m"
            justifyContent="space-between"
          >
            <CusButton onPress={goBack}>
              <SvgIcon style={{ position: 'relative', left: -9 }} name="left" size={28} color="white" />
            </CusButton>
            <Flex>
              <CusButton mr="s">
                <SvgIcon name="bookmark" color="white" size={23} />
              </CusButton>
              <CusButton>
                <SvgIcon name="share" color="white" size={20} />
              </CusButton>
            </Flex>
          </CusBox>
        </CusBox>
      </FastImage>

      <Section>
        <CusText variant="pageHead" color="func400" mb="l">
          {postDetail?.title}
        </CusText>
        <CusText variant="body" color="gray500">
          {postDetail?.body}
        </CusText>
      </Section>
    </>
  );
};
