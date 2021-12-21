import i18n, { StringMap, TOptionsBase } from 'i18next';
import { initReactI18next, TFuncKey } from 'react-i18next';
import RNLanguageDetector from './detector';
import * as resources from './locales';

export const defaultI18nKey = 'en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(RNLanguageDetector as any)
  .init({
    resources: {
      ...Object.entries(resources).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            translation: value,
          },
        }),
        {}
      ),
    },
    debug: false,
    fallbackLng: 'en',
    // have a common namespace used around the full app
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
    ns: ['translation'],
    compatibilityJSON: 'v3',
  });

export { resources };
export type { StringMap, TOptionsBase, TFuncKey, I18nKey };
type I18nKey = keyof typeof resources;

export default i18n;
