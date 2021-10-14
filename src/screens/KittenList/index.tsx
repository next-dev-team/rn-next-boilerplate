import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import { Posts } from 'components/templates';
import React, { useEffect } from 'react';
import { getPostsList, selPostList } from 'store/postsSlice';
import { useAppDispatch, useAppSelector } from 'store/useStore';

const KittenListScreen = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selPostList);

  useEffect(() => {
    dispatch(getPostsList());
  }, [dispatch]);

  // console.log('postList', postList);

  return (
    <Container statusBarProps={{ translucent: false }} type="scroll">
      <Section>
        <Posts data={postList?.data as []} />
      </Section>
    </Container>
  );
};

export default KittenListScreen;
