import { createState, useState } from '@hookstate/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CreatePersistor, { PersistorWrapper } from 'hookstate-persist';

type IPersistStore<E> = {
  store: any;
  key: string;
  whitelist?: E[];
};

/**
 *  persistStore
 *  @usage - before render
 *  persistStore({ key: 'useSettingsStore', state, whitelist: ['counter'] });
 */
export const usePersistStore = <E, S>({ store, key, whitelist = [] }: IPersistStore<E>) => {
  const state = useState(store as S);

  const runPersist = () => {
    // create the peristor plugin
    const persistor = CreatePersistor({
      key,
      engine: AsyncStorage,
      whitelist: whitelist as unknown as string[],
    });

    state.attach(persistor);
  };

  /**
   * call function to get d
   */
  runPersist();

  return {
    state,
  };
};

/**
 * createStatePersist - createState with persist
 * @param store
 */
export const createStatePersist = <S extends unknown>(store: S) => {
  const initStore = PersistorWrapper(store);
  return createState(initStore);
};
