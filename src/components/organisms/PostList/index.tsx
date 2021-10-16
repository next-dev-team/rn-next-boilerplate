import { PostCard } from 'components/molecules';
import React from 'react';

export type PostListProps = {
  data: PostsApi.PostsType['data'];
  onPress?: (v: PostsApi.Datum) => void;
};

export const PostList = (props: PostListProps) => {
  const { data = [], onPress } = props;
  return (
    <>
      {data?.map?.((i, k) => {
        return <PostCard key={k} mb="l" data={i} onPress={() => onPress?.(i)} />;
      })}
    </>
  );
};
