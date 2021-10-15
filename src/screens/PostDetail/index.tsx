import { CusText } from 'components/atoms';
import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import { getCurrentRoute } from 'navigation/NavigationService';
import React, { useEffect } from 'react';
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
    <Container barStyle="light-content" spinning={postDetailStatus === 'loading'} type="scroll">
      <FastImage source={{ uri: state?.img }} style={{ width: '100%', height: px(320) }} />
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
