import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IApiResponse, IResponseItemDetail } from '../types';

const apiKey = '9f6cce273c8245fe92a6e6b067205a08';
// const apiKey = '4f8ae2877d90437daeb973385d3ea83b';

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rawg.io/api' }),
  tagTypes: ['Game'],

  endpoints: (build) => ({
    gameList: build.query<
      IApiResponse,
      { page_size: number; page: number; search: string }
    >({
      query(params = { page_size: 10, page: 1, search: '' }) {
        return {
          url: `/games?key=${apiKey}`,
          params,
          method: 'GET',
        };
      },
    }),
    gameDetails: build.query<IResponseItemDetail, string>({
      query: (id: string) => `/games/${id}?key=${apiKey}`,
    }),
  }),
});
