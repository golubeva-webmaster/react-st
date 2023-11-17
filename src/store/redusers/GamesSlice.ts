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
  itemsPerPage: 10,
  count: 0,
  pagesCount: 0,
  error: '',
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching(state) {
      state.isLoading = true;
      state.error = '';
    },
    gamesFetchingSuccess(state, action: PayloadAction<IApiResponse>) {
      state.isLoading = false;
      state.items = action.payload.results;
    },
    gamesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setQuerySelector(state, action: PayloadAction<string>) {
      console.log('setQuerySelector', action);

      state.searchQuery = action.payload;
      fetchGames(action.payload);
    },
  },
});

export default gamesSlice.reducer;
