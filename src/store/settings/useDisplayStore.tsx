import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useRef } from 'react';
import { createStatePersist, usePersistStore } from '_app/plugins';

type IInitStore = {};

const initStore = {};

type IStore = IInitStore & typeof initStore;
type IStoreKey = keyof IStore;

const store = createStatePersist<IStore>({
  ...initStore,
});

export function useDisplayStore() {
  const { state } = usePersistStore<IStoreKey, IStore>({
    key: 'useDisplayStore',
    store,
    whitelist: [],
  });

  const bSheetHomeRef = useRef<BottomSheetMethods>(null);

  const openBSheetHome = () => {
    bSheetHomeRef?.current?.expand();
  };
  const closeBSheetHome = () => {
    bSheetHomeRef?.current?.close();
  };

  return { bSheetHomeRef, openBSheetHome, closeBSheetHome } as const;
}
