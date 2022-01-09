import { createStatePersist, usePersistStore } from '_app/plugins';

type IInitStore = Partial<{
  menusScreen: IMenus[];
}>;

const detailScreenTitle = {
  BottomSheet: 'Bottom Sheet',
  TailwindCSS: 'Tailwind CSS',
};

const initStore = {
  menusScreen: [
    {
      title: detailScreenTitle.BottomSheet,
    },
    {
      title: detailScreenTitle.TailwindCSS,
    },
  ],
  detailScreenTitle,
};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>({
  ...initStore,
});

export function useHomeStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useHomeStore',
    store,
    whitelist: [],
  });

  return {
    get menusScreen() {
      return state.menusScreen.get();
    },
    get detailScreenTitle() {
      return state.detailScreenTitle.get();
    },
  } as const;
}
