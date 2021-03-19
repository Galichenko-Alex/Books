import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { FETCH_BOOKS, PUT_BOOKS, SEARCH_BOOKS, namespace } from './actionTypes';

export interface Book {
  id: string;
  title: string;
  author: string;
  thumbnailUrl: string;
  genre: string;
  description: string;
}

interface BooksState {
  books: Book[];
  isLoading: boolean;
  visibleBooks: Book[];
  searchString: string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  visibleBooks: [],
  searchString: '',
};

export const BOOKS_STATE_KEY = 'books';

export const booksSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    [FETCH_BOOKS]: (state) => {
      state.isLoading = true;
    },

    [PUT_BOOKS]: (state, { payload }: PayloadAction<Book[]>) => {
      state.isLoading = false;
      state.books = payload;
      state.visibleBooks = payload;
    },
    [SEARCH_BOOKS]: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = false;
      state.searchString = payload;
      state.visibleBooks = state.books.filter((book) => {
        return Object.values(book).some((field: string) => field.includes(payload));
      });
    },
  },
});

export const fetchBooks = booksSlice.actions[FETCH_BOOKS];
export const putBooks = booksSlice.actions[PUT_BOOKS];
export const searchBooks = booksSlice.actions[SEARCH_BOOKS];

export const mockAPISuccessRequest = (books: Book[]): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(putBooks(books));
  }, 2000);
};

export const selectSearchString = (state: RootState) => state[BOOKS_STATE_KEY].searchString;
export const selectVisibleBooks = (state: RootState) => state[BOOKS_STATE_KEY].visibleBooks;
export const selectIsLoading = (state: RootState) => state[BOOKS_STATE_KEY].isLoading;

export default booksSlice.reducer;
