import { createStatePersist, usePersistStore } from '_app/plugins';
import { tw } from '_app/utils';

type IInitStore = {
  colorScheme: 'dark' | 'light' | 'system';
};

const initStore = {
  counter: 1,
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>({
  colorScheme: 'light',
  ...initStore,
});

export function useSettingsStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useSettingsStore',
    store,
    whitelist: ['counter', 'colorScheme'],
  });

  const setColorScheme = (colorScheme: IInitStore['colorScheme'] = 'light') => {
    tw.setColorScheme(colorScheme as any);
    const theme = {
      dark: 'dark',
      light: 'light',
      system: 'system',
    } as Record<IInitStore['colorScheme'], IInitStore['colorScheme']>;
    return state.colorScheme.set(theme?.[colorScheme]);
  };

  return {
    setsetCounter: (by = 1) => {
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
