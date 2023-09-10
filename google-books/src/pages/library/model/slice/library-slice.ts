import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LibrarySchema } from '../types/librarySchema';
import { BooksProps } from '../../../../services';

const initialState: LibrarySchema = {
  page: 0,
  totalItems: 0,
  items: undefined,
  searchTerm: '',
  category: '',
  sort: 'Relevance',
};

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    setBooksProps: (state, action: PayloadAction<BooksProps>) => {
      state.page = 0;
      state.totalItems = 0;
      state.category = action.payload.category;
      state.searchTerm = action.payload.searchTerm;
      state.sort = action.payload.sort;
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setBooksProps, setTotalItems, setPage } = librarySlice.actions;

export default librarySlice.reducer;
