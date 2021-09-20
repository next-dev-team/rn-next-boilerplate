import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import { StatusBar, StatusBarProps } from 'react-native';

const FocusAwareStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar translucent {...props} /> : null;
};

export default FocusAwareStatusBar;
