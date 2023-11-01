import { ReactNode } from 'react';

export interface ISearchPanel {
  searchQuery: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export interface IState {
  searchQuery: string;
  items: Array<ResponseItem>;
  isLoading: boolean;
  hasError: boolean;
}

export interface IButtonProps {
  text: string;
}

export interface ISearchResult {
  data: Array<ResponseItem>;
}

export interface ErrorState {
  hasError: boolean;
}

export interface ErrorProps {
  children: ReactNode;
}

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResponseItem[] | [];
  user_platforms: boolean;
};

export type ResponseItem = {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  metacritic: number;
  metacritic_url: string;
  genres: Genres[];
  platforms: Platforms<Genres>[];
};

interface Genres {
  id: number;
  name: string;
  slug: string;
}

interface Platforms<T> {
  platform: T;
}
