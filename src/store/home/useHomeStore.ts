import { createStatePersist, usePersistStore } from '@/plugins';

type IInitStore = Partial<{
  menusScreen: IMenus[];
}>;

const detailScreenTitle = {
  BottomSheet: 'Bottom Sheet',
  TailwindCSS: 'Tailwind CSS',
  ProgressiveFastImage: 'Progressive FastImage',
  RoundedCheckboxGroup: 'Rounded CheckboxGroup',
  RecyclerFlatList: 'Recycler FlatList',
  ModalTemplate: 'Modal Sheet',
  requestAxios: 'Request1',
};

const initStore = {
  menusScreen: [
    {
      title: detailScreenTitle.BottomSheet,
    },
    {
      title: detailScreenTitle.TailwindCSS,
    },
    {
      title: detailScreenTitle.ProgressiveFastImage,
    },
    {
      title: detailScreenTitle.ModalTemplate,
    },
    {
      title: detailScreenTitle.RoundedCheckboxGroup,
    },
    {
      title: detailScreenTitle.RecyclerFlatList,
    },
    {
      title: detailScreenTitle.requestAxios,
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
