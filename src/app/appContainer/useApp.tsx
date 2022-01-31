import { useSettingsStore, useTheme } from '@/store';
import { useEffect } from 'react';

export const useApp = () => {
  const { colorScheme } = useSettingsStore();
  const { setColorSchemeApp, twColor } = useTheme();

  useEffect(() => {
    setColorSchemeApp(colorScheme as any);
  }, [colorScheme]);

  return { twColor };
};
