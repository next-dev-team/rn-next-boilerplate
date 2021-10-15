import { StackNavigationOptions } from '@react-navigation/stack';
import { CusButton, Flex } from 'components/atoms';
import Header from 'components/atoms/Layout/Header';
import SvgIcon from 'components/atoms/svg-icon';
import { goBack } from 'navigation/NavigationService';
import React from 'react';

const RenderHeader = () => {
  return (
    <Header isFullImg>
      <Flex marginTop="xl" padding="m" justifyContent="space-between">
        <CusButton onPress={goBack}>
          <SvgIcon style={{ position: 'relative', left: -9 }} name="left" size={28} color="white" />
        </CusButton>

        <Flex>
          <CusButton mr="s">
            <SvgIcon name="bookmark" color="white" size={23} />
          </CusButton>
          <CusButton>
            <SvgIcon name="share" color="white" size={20} />
          </CusButton>
        </Flex>
      </Flex>
    </Header>
  );
};
const PostDetailOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default PostDetailOption;
