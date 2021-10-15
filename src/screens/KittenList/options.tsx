import { StackNavigationOptions } from '@react-navigation/stack';
import Header from 'components/atoms/Layout/Header';
import React from 'react';
import { TextInput } from 'react-native';
import { SCREEN_WIDTH } from 'utils/dimension';

const RenderHeader = () => {
  return (
    <Header
      left={
        <TextInput
          placeholder="Search..."
          style={{
            width: SCREEN_WIDTH * 0.6,
            paddingHorizontal: 10,
            height: 38,
            borderWidth: 1,
            borderColor: '#999',
            borderRadius: 16,
            backgroundColor: 'white',
          }}
        />
      }
    />
  );
};
const KittenListOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenListOption;
