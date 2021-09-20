import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootMiddleware from './rootMiddleware';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).prepend(rootMiddleware),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppThunkOption = {
  state: RootState;
  dispatch: AppDispatch;
};
