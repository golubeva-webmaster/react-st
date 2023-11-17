import { AppDispatch } from '../store';
import { gamesSlice } from './GamesSlice';

export const apiKey = '9f6cce273c8245fe92a6e6b067205a08';
const baseUrl = 'https://rawg.io/api/games';

export const fetchGames =
  (search = '', page_size = '10', page = '1') =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(gamesSlice.actions.gamesFetching());
      const response = await fetch(
        `${baseUrl}?token&key=${apiKey}${search}&ordering=-metacritic&page_size=${page_size}&page=${page}`
      );
      dispatch(gamesSlice.actions.gamesFetchingSuccess(await response.json()));
    } catch (e) {
      dispatch(gamesSlice.actions.gamesFetchingError(e));
    }
  };
