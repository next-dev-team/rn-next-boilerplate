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
  // console.log('postList', postList);

  return (
    <Container
      barStyle="dark-content"
      statusBarProps={{ backgroundColor: 'transparent' }}
      spinning={postStatus === 'loading'}
      type="scroll"
    >
      <Section>
        <Posts
          {...{
            data: postList?.data?.map?.((i: any) => {
              return {
                img: convertToHttps(fakerData().random.image()),
                date: fakerData().date.future().toDateString(),
                // hour: fakerData().datatype.number(24),
                // body: fakerData().lorem.paragraphs(6),
                // title: fakerData().random.words(6),
                // id: fakerData().datatype.number(100),
                ...i,
              };
            }) as [],
            onPress: onDetailCard,
          }}
        />
      </Section>
    </Container>
  );
};

export default KittenListScreen;
