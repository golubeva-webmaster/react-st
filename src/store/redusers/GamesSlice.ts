import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IApiResponse, IResponseItem } from '../../types';
import { fetchGames } from './ActionCreators';

interface GamesState {
  searchQuery?: string;
  items: IResponseItem[];
  isLoading: boolean;
  page: number;
  itemsPerPage: number;
  count: number;
  pagesCount: number;
  error: string;
}

const initialState: GamesState = {
  searchQuery: localStorage.getItem('searchQuery') ?? '',
  items: [{}],
  isLoading: false,
  page: 1,
  itemsPerPage: Number(localStorage.getItem('itemsPerPage')) ?? 10,
  count: 0,
  pagesCount: 0,
  error: '',
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      localStorage.setItem('searchQuery', action.payload ?? '');
      console.log('state ыуе searchQuery', action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: {
    [fetchGames.fulfilled.type]: (
      state,
      action: PayloadAction<IApiResponse>
    ) => {
      state.isLoading = false;
      state.items = action.payload ? action.payload.results : [];
      state.count = action.payload ? action.payload.count : 0;
      state.pagesCount = Math.ceil(state.count / state.itemsPerPage);
    },
    [fetchGames.pending.type]: (state) => {
      //, action: PayloadAction<IApiResponse>
      state.isLoading = true;
      state.error = '';
    },
    [fetchGames.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gamesSlice.reducer;
