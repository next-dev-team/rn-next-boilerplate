import { en } from '../src/i18n/locales';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
