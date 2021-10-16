import { CusBox, CusButton, CusText, Flex } from 'components/atoms';
import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import SvgIcon from 'components/atoms/svg-icon';
import omit from 'lodash/omit';
import { getCurrentRoute, goBack } from 'navigation/NavigationService';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { getPostsDetail, selPostDetailStatus } from 'store/postsSlice';
import { useAppDispatch, useAppSelector } from 'store/useStore';
import { px } from 'utils/dimension';

const PostDetail = () => {
  const { params } = getCurrentRoute('PostDetail') || {};
  const { state } = params || {};
  const postDetailStatus = useAppSelector(selPostDetailStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (state?.id) {
      dispatch(getPostsDetail(state.id));
    }
  }, [dispatch, state?.id]);

  return (
    <Container
      barStyle="light-content"
      statusBarProps={{ backgroundColor: 'transparent' }}
      spinning={postDetailStatus === 'loading'}
      type="scroll"
    >
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
          {state?.title}
        </CusText>
        <CusText variant="body" color="gray500">
          {state?.body}
        </CusText>
      </Section>
    </Container>
  );
};

export default PostDetail;
