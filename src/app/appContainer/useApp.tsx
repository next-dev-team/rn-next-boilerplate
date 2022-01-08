import { useEffect } from 'react';
import { useSettingsStore, useTheme } from '_app/store';

export const useApp = () => {
  const { colorScheme } = useSettingsStore();
  const { setColorSchemeApp, twColor } = useTheme();

  useEffect(() => {
    setColorSchemeApp(colorScheme as any);
  }, [colorScheme]);

  return { twColor };
};
