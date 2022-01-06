import { createStatePersist, usePersistStore } from '_app/plugins';

type IInitStore = {};

const initStore = {};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>({
  ...initStore,
});

export function useExampleStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useExampleStore',
    store,
    whitelist: [],
  });

  return {} as const;
}
