import { TailwindFn } from 'twrnc';
import i18n, { defaultI18nKey, I18nKey } from '_app/i18n';
import { createStatePersist, usePersistStore } from '_app/plugins';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
  currentLocaleKey: I18nKey;
  twStyle: ReturnType<TailwindFn['style']>;
};

const initStore = {
  counter: 1,
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>({
  ...initStore,
  colorScheme: 'light',
  currentLocaleKey: defaultI18nKey,
  twStyle: {},
});

export function useSettingsStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useSettingsStore',
    store,
    whitelist: ['counter', 'colorScheme', 'currentLocaleKey'],
  });

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;

    state.colorScheme.set(theme?.[colorScheme]);
  };

  return {
    setCurrentLocaleKey: (key: I18nKey = 'en') => {
      state.currentLocaleKey.set(key);
      i18n.changeLanguage(key);
    },
    get currentLocaleKey() {
      return state.currentLocaleKey.get();
    },
    inc: (by = 1) => {
      state.counter.set(p => p + by);
    },
    dec: (by = 1) => {
      state.counter.set(p => p - by);
    },
    get counter() {
      return state.counter.get();
    },
    setColorScheme,
    get colorScheme() {
      return state.colorScheme.get();
    },
    get darkMode() {
      return state.colorScheme.get() === 'dark';
    },
  } as const;
}
