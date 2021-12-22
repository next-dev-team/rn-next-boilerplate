import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';

export const Container = ({ children }: { children: any }) => {
  const { darkMode } = useSettingsStore();

  return (
    <>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} backgroundColor="transparent" translucent />
      {children}
    </>
  );
};
