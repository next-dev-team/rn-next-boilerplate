import { Container } from 'components/atoms/Container';
import { PostDetail } from 'components/templates';
import { observer } from 'mobx-react-lite';
import { getCurrentRoute } from 'navigation/NavigationService';
import React, { useEffect } from 'react';
import { postStore } from 'store';

const PostDetailScreen = observer(() => {
  const { params } = getCurrentRoute('PostDetail') || {};
  const { state } = params || {};
  const { getPostDetail, postDetailStatus, postDetail } = postStore;

  useEffect(() => {
    getPostDetail(state?.id);
  }, [getPostDetail, state?.id]);

  return (
    <Container
      barStyle="light-content"
      statusBarProps={{ backgroundColor: 'transparent' }}
      spinning={postDetailStatus === 'loading'}
      type="scroll"
    >
      <PostDetail {...{ postDetail, state }} />
    </Container>
  );
});

export default PostDetailScreen;
