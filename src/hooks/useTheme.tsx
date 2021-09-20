import { useTheme } from '@shopify/restyle';
import { AppTheme } from 'themes';

export const useAppTheme = () => {
  const theme = useTheme<AppTheme>();
  return { ...theme };
};
