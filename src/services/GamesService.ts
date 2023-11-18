import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IApiResponse } from '../types';

export const apiKey = '9f6cce273c8245fe92a6e6b067205a08';

export const gamesAPI = createApi({
  reducerPath: 'gamesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rawg.io/api' }),
  tagTypes: ['Game'],
  endpoints: (build) => ({
    fetchAllGames: build.query<IApiResponse, number>({
      query: (itemsPerPage = 5, page = 2) => ({
        url: `/games?key=${apiKey}`,
        params: {
          //todo добавить другие параметры
          page_size: itemsPerPage,
          page: page,
        },
      }),
      providesTags: () => ['Game'],
    }),
  }),
});
