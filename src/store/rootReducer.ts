import AsyncStorage from '@react-native-async-storage/async-storage';
import persistCombineReducers from 'redux-persist/lib/persistCombineReducers';
import persistReducer from 'redux-persist/lib/persistReducer';
import kittenSlice from './kittenSlice';

/**
 * common persist nested store
 */

const commonConfig = {
  version: 1,
  storage: AsyncStorage,
};

/**
 * appStore
 */
const persistConfig = {
  ...commonConfig,
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const appStorePersistConfig = {
  ...commonConfig,
  key: 'kittenSlice',
  whitelist: ['kittenList'],
};

/**
 * all reducer here
 */
const allReducers = {
  kittenSlice: persistReducer(appStorePersistConfig, kittenSlice),
};

export default persistCombineReducers(persistConfig, allReducers);
