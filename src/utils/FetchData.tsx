import { IApiResponse, IResponseItemDetail } from '../types';

export const apiKey = '2de256abeb6040da91f0216d56988978';
const baseUrl = 'https://rawg.io/api/games';

export async function getList(
  queryStr: string,
  page_size: number,
  page: number
): Promise<IApiResponse | void> {
  const search = queryStr ? `&search=${queryStr}` : ``;
  const request = await fetch(
    `${baseUrl}?token&key=${apiKey}${search}&ordering=-metacritic&page_size=${page_size}&page=${page}`
  );

  if (request.ok) {
    const response: IApiResponse = await request.json();
    return response;
  }
}

export async function getItem(id: string): Promise<IResponseItemDetail> {
  const request = await fetch(
    `${baseUrl}/${id}?token&key=${apiKey}&ordering=-metacritic`
  );

  if (!request.ok) throw new Error('Something went wrong!');
  const response: IResponseItemDetail = await request.json();
  return response;
}
