// Import here your languages
import ch from './locales/ch.json';
import en from './locales/en.json';

// Set here you favourite default language
export const defaultLanguage = 'en';

export const resources = {
  en,
  ch,
} as const;

export type TranKey = typeof en;
