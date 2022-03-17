import { configureStore } from '@reduxjs/toolkit';

import { createAPI } from 'src/services/api';
import { rootReducer } from 'src/store/root-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
