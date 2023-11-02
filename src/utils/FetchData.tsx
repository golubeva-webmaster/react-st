import { IApiResponse, IResponseItem } from '../types';

const apiKey = '2de256abeb6040da91f0216d56988978';

export async function getDataFromApi(
  queryStr: string
): Promise<IResponseItem[] | void> {
  const search = queryStr ? `&search=${queryStr}` : ``;
  const request = await fetch(
    `https://rawg.io/api/games?token&key=${apiKey}${search}&ordering=-metacritic`
  );
  if (request.ok) {
    const response: IApiResponse = await request.json();
    const results: IResponseItem[] = response.results;
    return results;
  }
}
