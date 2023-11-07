import { ReactNode } from 'react';

export interface ISearchPanel {
  searchQuery: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

export interface IState {
  searchQuery: string;
  items: IResponseItem[];
  isLoading: boolean;
  hasError: boolean;
}

export interface IButtonProps {
  text: string;
}

export interface ErrorState {
  hasError: boolean;
}

export interface ErrorProps {
  children: ReactNode;
}

export type IApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResponseItem[] | [];
  user_platforms: boolean;
};

export type IResponseItem = {
  id: number;
  slug: string;
  name: string;
  description: string;
  background_image: string;
  genres: IGenres[];
  platforms: IPlatforms<IGenres>[];
  tags: ITag[];
};
export type IResponseItemDetail = {
  id: number;
  slug?: string;
  name?: string;
  name_original?: string;
  description_raw?: string;
  released?: string;
  tba?: false;
  updated?: string;
  background_image?: string;
  background_image_additional?: string;
  website?: string;
  rating?: number;
  rating_top?: number;
  added: number;
};

export interface ITag {
  games_count: number;
  id: number;
  image_background: string;
  language: string;
  name: string;
  slug: string;
}

interface IGenres {
  id: number;
  name: string;
  slug: string;
}

interface IPlatforms<T> {
  platform: T;
}
