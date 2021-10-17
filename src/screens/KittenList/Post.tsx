import { Posts } from 'components/templates';
import { observer } from 'mobx-react-lite';
import { navigateStack } from 'navigation/NavigationService';
import React, { useEffect, useMemo } from 'react';
import { postStore } from 'store';
import { fakerData } from 'utils/mockData';
import { convertToHttps } from 'utils/string';

export const RenderPost = observer(() => {
  const { postList } = postStore;

  useEffect(() => {
    postStore.getPost();
  }, []);

  const onDetailCard = (state: PostsApi.Datum) => {
    navigateStack('PostDetail', { state });
  };

  const data = useMemo(
    () =>
      postList?.data?.map?.((i: any) => {
        return {
          img: convertToHttps(fakerData().random.image()),
          date: fakerData().date.future().toDateString(),
          hour: fakerData().datatype.number(24),
          // body: fakerData().lorem.paragraphs(6),
          // title: fakerData().random.words(6),
          id: fakerData().datatype.number(100),
          ...i,
        };
      }) as [],
    [postList]
  );
  // console.log('render post');

  return (
    <Posts
      {...{
        data,
        onPress: onDetailCard,
      }}
    />
  );
});
