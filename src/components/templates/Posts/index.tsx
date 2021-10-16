import { ResentCard } from 'components/molecules';
import { PostList, PostListProps } from 'components/organisms/PostList';
import React from 'react';

export const Posts = ({ ...rest }: PostListProps) => {
  return (
    <>
      <ResentCard {...{ onPress: rest.onPress, data: rest?.data?.[5] }} />
      <PostList {...{ ...rest }} />
    </>
  );
};
