import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { RefreshControl } from 'react-native';
import { postStore } from 'store';
import { RenderCounter } from './Counter';
import { RenderPost } from './Post';

const PostScreen = observer(() => {
  const { postStatus, getPost, refresh, refreshPost } = postStore;

  return (
    <Container
      barStyle="dark-content"
      statusBarProps={{ backgroundColor: 'transparent' }}
      spinning={postStatus === 'loading' && !refresh}
      type="scroll"
      scrollViewProps={{
        refreshControl: (
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              refreshPost(true);
              getPost().then(() => {
                refreshPost(false);
              });
            }}
          />
        ),
      }}
    >
      <Section>
        <RenderCounter />
        <RenderPost />
      </Section>
    </Container>
  );
});

export default PostScreen;
