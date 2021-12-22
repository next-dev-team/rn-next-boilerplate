import { useEffect } from 'react';
import { useSettingsStore } from '_app/store/settings/useSettingsStore';
import { useTheme } from '_app/store/useTheme';

export function useApp() {
  const { colorScheme } = useSettingsStore();
  const { twColor, setColorSchemeApp } = useTheme();

  useEffect(() => {
    setColorSchemeApp(colorScheme as any);
  }, [colorScheme]);

  return { twColor };
}
