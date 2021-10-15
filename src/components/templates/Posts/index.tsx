import { ResentCard } from 'components/molecules';
import { PostList, PostListProps } from 'components/organisms/PostList';
import React from 'react';

export const Posts = ({ ...rest }: PostListProps) => {
  return (
    <>
      <ResentCard />
      <PostList {...{ ...rest }} />
    </>
  );
};
