import { LinkingOptions } from '@react-navigation/native';
import { Linking } from 'react-native';
import { AppStackParams } from './appNavigation';
// https://reactnavigation.org/docs/navigation-container#linking

export const linkingApp: LinkingOptions<AppStackParams> = {
  enabled: true,
  prefixes: ['kitten://app', 'https://goggle.com'],
  config: {
    screens: {},
  },
  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Check if there is an initial firebase notification
    // const message = await messaging().getInitialNotification();

    // Get the `url` property from the notification which corresponds to a screen
    // This property needs to be set on the notification payload when sending it
    return 'https://goggle.com';
  },
};
