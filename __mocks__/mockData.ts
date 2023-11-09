export type { IContext, IResponseItem } from '../src/types';

export const mockData = {
  searchQuery: 'flower',
  items: [
    {
      id: 795505,
      slug: 'tokoyo-the-tower-of-perpetuity',
      name: 'TOKOYO: The Tower of Perpetuity',
      description: '',
      background_image:
        'https://media.rawg.io/media/screenshots/a8f/a8fb6fa269c5e1faf0329de6f1e4b88f.jpg',
      genres: [
        { id: 51, name: 'Indie', slug: 'indie' },
        { id: 4, name: 'Action', slug: 'action' },
      ],
      platforms: [
        {
          platform: { id: 4, name: 'PC', slug: 'pc' },
        },
      ],
      tags: [],
    },
  ],
  isLoading: false,
  page: 1,
  itemsPerPage: 10,
  count: 2450,
  pagesCount: 0,
  // onSubmit?: () => void;
  // changeCountPerPage?: () => void;
  // handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // paginationClick?: (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  // ) => void;
};
