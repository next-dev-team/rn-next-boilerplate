import { LinkingOptions } from '@react-navigation/native';
import { AppStackParams } from './appNavigation';

export const linking: LinkingOptions<AppStackParams> = {
  enabled: true,
  prefixes: ['kitten://app'],
  config: {
    screens: {},
  },
};
