import { RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createBrowserRouter } from 'react-router-dom';
import Detail from '../components/Detail/Detail';

describe('Detail', () => {
  beforeAll(() => {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Detail />,
      },
    ]);
    // ReactDOM.createRoot(el).
    render(<RouterProvider router={router} />);
  });

  it('Check that a loading indicator is displayed while fetching data', () => {});

  it('Make sure the detailed card component correctly displays the detailed card data', () => {});

  it('Ensure that clicking the close button hides the component', () => {});
});
