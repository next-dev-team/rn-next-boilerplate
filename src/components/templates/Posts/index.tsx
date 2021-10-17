import { CusText } from 'components/atoms';
import { ResentCard } from 'components/molecules';
import { PostList, PostListProps } from 'components/organisms/PostList';
import React from 'react';

export const Posts = ({ ...rest }: PostListProps) => {
  return (
    <>
      <CusText variant="pageHead" mb="m">
        Daily News
      </CusText>
      <ResentCard {...{ onPress: rest.onPress, data: rest?.data?.[5] }} />
      <PostList {...{ ...rest }} />
    </>
  );
};
