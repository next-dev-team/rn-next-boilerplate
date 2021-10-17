import { TranKey } from 'i18n/config';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: TranKey;
  }
}
