import { Container } from 'components/atoms/Container';
import { Section } from 'components/atoms/Section';
import { Posts } from 'components/templates';
import { navigateStack } from 'navigation/NavigationService';
import React, { useEffect } from 'react';
import { getPostsList, selPostList, selPostStatus } from 'store/postsSlice';
import { useAppDispatch, useAppSelector } from 'store/useStore';
import { fakerData } from 'utils/mockData';
import { convertToHttps } from 'utils/string';

const KittenListScreen = () => {
  const dispatch = useAppDispatch();
  const postList = useAppSelector(selPostList);
  const postStatus = useAppSelector(selPostStatus);

  useEffect(() => {
    dispatch(getPostsList());
  }, [dispatch]);

  const onDetailCard = (state: PostsApi.Datum) => {
    navigateStack('PostDetail', { state });
  };

  return (
    <Container spinning={postStatus === 'loading'} type="scroll">
      <Section>
        <Posts
          {...{
            data: postList?.data?.map(i => {
              return { ...i, img: convertToHttps(fakerData().random.image()) };
            }) as [],
            onPress: onDetailCard,
          }}
        />
      </Section>
    </Container>
  );
};

export default KittenListScreen;
