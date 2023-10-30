export interface IItem {
  anthology: boolean;
  audiobook: boolean;
  audiobookAbridged: boolean;
  audiobookPublishedDay: number;
  audiobookPublishedMonth: number;
  audiobookPublishedYear: number;
  audiobookRunTime: number;
  biographyBook: boolean;
  ebook: boolean;
  novel: boolean;
  novelization: boolean;
  numberOfPages: number;
  productionNumber: number;
  publishedDay: number;
  publishedMonth: number;
  publishedYear: number;
  referenceBook: boolean;
  rolePlayingBook: boolean;
  stardateFrom: number;
  stardateTo: number;
  title: string;
  uid: string;
  unauthorizedPublication: boolean;
  yearFrom: number;
  yearTo: number;
}

export interface ISearchPanel {
  searchQuery: string;
  // updateInput: () => void;
  // searchButtonClick: () => void;
}

export interface IState {
  searchQuery: string;
  items: Array<IItem>;
  isLoading: boolean;
}
