import AsyncStorage from '@react-native-async-storage/async-storage';
import noop from 'lodash/noop';
import { findBestAvailableLanguage } from 'react-native-localize';
import { defaultI18nKey } from '.';
import * as resources from './locales';

const LOCALE_PERSISTENCE_KEY = 'app_locale';

const RNLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: async (cb: (detectedLocale: string) => void): Promise<void> => {
    try {
      // Retrieve cached locale
      const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);

      // If not found, detect from device
      if (!persistedLocale) {
        // Find best available language from the resource ones
        const languageTags = Object.keys(resources);
        const detectedLocale = await findBestAvailableLanguage(languageTags);

        // Return detected locale or default language
        return cb(detectedLocale?.languageTag ?? defaultI18nKey);
      }

      cb(persistedLocale);
    } catch {
      console.warn('Failed to detect locale!');
      // console.warn('Will use defaultLanguage:', defaultLanguage);

      cb(defaultI18nKey);
    }
  },
  init: noop,
  cacheUserLanguage: (locale: string): void => {
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
  },
};

export default RNLanguageDetector;
