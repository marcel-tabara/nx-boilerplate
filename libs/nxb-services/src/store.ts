import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import auth from './services/auth/auth.api'
import { externalApi } from './services/external/external.api'
import { internalApi } from './services/internal/internal.api'
import polling from './services/polling/polling.api'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {
      [externalApi.reducerPath]: externalApi.reducer,
      [internalApi.reducerPath]: internalApi.reducer,
      polling,
      auth,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(externalApi.middleware)
        .concat(internalApi.middleware),
    ...options,
  });

export const store = createStore();
setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
