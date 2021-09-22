// Import here your languages
import en from './locales/en.json';
import it from './locales/it.json';

// Set here you favourite default language
export const defaultLanguage = 'en';

export const resources = {
  en: {
    en,
    it,
  },
} as const;

export type TranslationKeys = keyof typeof en;
