import { LinkingOptions } from '@react-navigation/native';
import { AppStackParams } from './AppNavigation';

export const linking: LinkingOptions<AppStackParams> = {
  enabled: true,
  prefixes: ['kitten://app'],
  config: {
    screens: {},
  },
};
