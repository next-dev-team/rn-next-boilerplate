import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { postStore } from 'store';
import { RenderCounter } from './Counter';
import { RenderPost } from './Post';

const PostScreen = observer(() => {
  const { postStatus } = postStore;

  return (
    <Container
      barStyle="dark-content"
      statusBarProps={{ backgroundColor: 'transparent' }}
      spinning={postStatus === 'loading'}
      type="scroll"
    >
      <Section>
        <RenderCounter />
        <RenderPost />
      </Section>
    </Container>
  );
});

export default PostScreen;
