import { PostCard } from 'components/molecules';
import React from 'react';

export type PostListProps = {
  data: PostsApi.PostsType['data'];
};

export const PostList = (props: PostListProps) => {
  const { data = [] } = props;
  return (
    <>
      {data?.map?.((i, k) => {
        return <PostCard key={i.id || k} mb="l" data={i} />;
      })}
    </>
  );
};
