import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createLogger } from 'redux-logger';
import auth from './services/auth/auth.api';
import { exampleApi } from './services/example/example.api';
import polling from './services/polling/polling.api';

const logger = createLogger();

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [exampleApi.reducerPath]: exampleApi.reducer,
      polling,
      auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(exampleApi.middleware).concat(logger),
    ...options,
  });

export const store = createStore();
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
