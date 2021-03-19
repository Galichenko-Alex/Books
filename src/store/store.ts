import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import booksReducer, { BOOKS_STATE_KEY } from './booksSlice/booksSlice';

export const store = configureStore({
  reducer: {
    [BOOKS_STATE_KEY]: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
