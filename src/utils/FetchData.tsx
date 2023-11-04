import { IApiResponse, IResponseItem, IResponseItemDetail } from '../types';

const apiKey = '2de256abeb6040da91f0216d56988978';

export async function getList(
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

export async function getItem(id: number): Promise<IResponseItemDetail | void> {
  const request = await fetch(
    `https://rawg.io/api/games/${id}?token&key=${apiKey}&ordering=-metacritic`
  );
  if (request.ok) {
    const response: IResponseItemDetail = await request.json();
    console.log('resp', response);
    // const result = response.results;
    // console.log(result);
    return response;
  }
}
