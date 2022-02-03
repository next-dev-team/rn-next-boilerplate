import { createStatePersist, usePersistStore } from '@/plugins';
import { requestAxios } from '@/utils';
import { useCreation, useRequest } from 'ahooks';

interface RootObject {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}

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
  const {
    data: userData,
    runAsync: getUserData,
    loading: loadingGetUser,
  } = useRequest(
    async () => {
      return await requestAxios<RootObject[]>('/users');
    },
    {
      manual: true,
      loadingDelay: 100,
    }
  );

  return {
    userData: useCreation(() => userData?.data, [userData]),
    loadingGetUser: useCreation(() => loadingGetUser && !userData?.data, [loadingGetUser, userData]),
    getUserData,
  } as const;
}
