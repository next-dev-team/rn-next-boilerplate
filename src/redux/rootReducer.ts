import AsyncStorage from '@react-native-async-storage/async-storage';
import persistCombineReducers from 'redux-persist/lib/persistCombineReducers';
import persistReducer from 'redux-persist/lib/persistReducer';
import postsSlice from './postsSlice';

/**
 * common persist nested store
 */

const commonConfig = {
  version: 1,
  storage: AsyncStorage,
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: undefined,
};

/**
 * appStore
 */
const persistConfig = {
  ...commonConfig,
  key: 'root',
  whitelist: [],
};

const appStorePersistConfig = {
  ...commonConfig,
  key: 'postsSlice',
  whitelist: ['kittenList'],
};

/**
 * all reducer here
 */
const allReducers = {
  postsSlice: persistReducer(appStorePersistConfig, postsSlice),
};

export default persistCombineReducers(persistConfig, allReducers);
