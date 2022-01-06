import * as React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { useTheme } from '_app/store/useTheme';

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};
export const ContainerRoot = ({ children }: any) => {
  const { darkMode } = useSettingsStore();
  const { twColor } = useTheme();

  return (
    <>
      <StatusBar
        barStyle={darkMode ? 'light-content' : 'dark-content'}
        backgroundColor={twColor(`bg-transparent dark:bg-dark`)}
      />
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </>
  );
};

export default Layout;
