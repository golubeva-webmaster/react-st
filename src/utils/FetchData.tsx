import { ApiResponse, ResponseItem } from '../types';

export default class ApiClient {
  private apiKey: string;
  constructor() {
    this.apiKey = '2de256abeb6040da91f0216d56988978';
  }

  async getData(queryStr: string): Promise<ResponseItem[] | void> {
    const request = await fetch(
      `https://rawg.io/api/games?token&key=${this.apiKey}&search=${queryStr}&ordering=-metacritic`
    );
    if (request.ok) {
      const response: ApiResponse = await request.json();
      const results: ResponseItem[] = response.results;
      return results;
    }
  }
}
