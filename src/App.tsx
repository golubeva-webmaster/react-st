import './App.module.scss';
import Detail, { loader } from './components/Detail/Detail';
import PageMain from './components/PageMain/PageMain';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Error from './routes/Error';
import React from 'react';
import { AppContextProvider } from './contexts/AppContext/AppContextProvider';

export const contextInitial = {
  searchQuery: '',
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  onSubmit: () => {},
  page: 1,
  itemsPerPage: 10,
  changeCountPerPage: (count: number) => {
    console.log;
    count;
  },
  items: [{}],
  isLoading: false,
  count: 0,
  pagesCount: 0,
  paginationClick: (e: React.ChangeEvent<HTMLElement>) => {
    console.log(e);
  },
};
export const Context = React.createContext(contextInitial);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <AppContextProvider>
            <PageMain />
          </AppContextProvider>
        }
        errorElement={<Error />}
      >
        <Route path="detail/:id" element={<Detail />} loader={loader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
