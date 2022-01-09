import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettingsStore, useTheme } from '_app/store';

export const ContainerRoot = ({ children }: any) => {
  const { darkMode } = useSettingsStore();
  const { tw, twColor } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        translucent={darkMode}
        backgroundColor={twColor(`bg-white dark:bg-dark`)}
      />
      <SafeAreaView edges={['top', 'left', 'right']} style={tw`flex-1 bg-white dark:bg-dark`}>
        {children}
      </SafeAreaView>
    </>
  );
};
