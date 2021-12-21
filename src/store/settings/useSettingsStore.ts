import { create, TailwindFn } from 'twrnc';
import i18n, { defaultI18nKey, I18nKey } from '_app/i18n';
import { createStatePersist, usePersistStore } from '_app/plugins';

const twConfig = create(require('../../../tailwind.config.js'));

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
    // tw.setColorScheme(colorScheme as any);
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;

    state.colorScheme.set(theme?.[colorScheme]);
  };

  // const twColor = useMemoizedFn((clx: string, clsKey: keyof TextStyle = 'color', isDefaultObj?: boolean) => {
  //   const cls = twStyle(`${clx}`);
  //   return (isDefaultObj ? cls : cls?.[(clx.includes('bg') && 'backgroundColor') || clsKey]) as string;
  // });

  return {
    setCurrentLocaleKey: (key: I18nKey = 'en') => {
      state.currentLocaleKey.set(key);
      i18n.changeLanguage(key);
    },
    get currentLocaleKey() {
      return state.currentLocaleKey.get();
    },
    setCounter: (by = 1) => {
      state.counter.set(p => p + by);
    },
    get counter() {
      return state.counter.get();
    },
    setColorScheme,
    get colorScheme() {
      return state.colorScheme.get();
    },
  } as const;
}
