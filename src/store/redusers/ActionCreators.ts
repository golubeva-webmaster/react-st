import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponseItem } from '../../types';
import axios from 'axios';

export const apiKey = '9f6cce273c8245fe92a6e6b067205a08';
// export const apiKey = '4f8ae2877d90437daeb973385d3ea83b';
const baseUrl = 'https://rawg.io/api/games';

export const fetchGames = createAsyncThunk(
  'games/fetchAll',
  async (_, thunkAPI) => {
    console.log('запрос с API');

    const state = thunkAPI.getState();
    const searchQuery = state?.gamesReducer.searchQuery;
    const search = searchQuery ? `&search=${searchQuery}` : ``;
    try {
      const response = await axios.get<IResponseItem[]>(
        `${baseUrl}?key=${apiKey}${search}&ordering=-metacritic
         &page_size=${state?.gamesReducer.itemsPerPage}&page=${state?.gamesReducer.page}`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('Не удалось загрузить данные.');
    }
  }
);
