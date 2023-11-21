import { mockContext } from '../../__mocks__/mockData';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card/Card';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

const items = mockContext.items ?? [{}];
const item = items[0] ?? {};

describe('Card', () => {
  beforeAll(() => {
    render(
      <BrowserRouter>
        <Card item={item} />
      </BrowserRouter>
    );
  });

  it('Ensure that the card component renders the relevant card data', () => {
    const name = screen.queryByTestId('item_name');
    expect(name?.innerHTML).toBe(item.name);

    const image = screen.queryByRole('img') as HTMLImageElement;
    expect(image?.alt).toBe(item.name);
    expect(image?.src).toBe(item.background_image);
  });

  it('Validate that clicking on a card opens a detailed card component', () => {
    //todo клик по ссылке, рендер всей страницы, поиск нужного текста
    // const link = screen.queryByTestId('795505') as HTMLElement;
    // fireEvent.click(link);
  });

  // it('Check that clicking triggers an additional API call to fetch detailed information', () => {});
});
