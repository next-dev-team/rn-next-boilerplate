import { StackNavigationOptions } from '@react-navigation/stack';
import CusHeader from 'navigation/components/CusOption';
import React from 'react';

const RenderHeader = () => {
  return <CusHeader center="Kitten View" />;
};
const KittenItemOption: StackNavigationOptions = {
  header: () => <RenderHeader />,
};

export default KittenItemOption;
