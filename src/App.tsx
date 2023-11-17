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
import React, { useEffect } from 'react';
// import { AppContextProvider } from './contexts/AppContext/AppContextProvider';
// import { gamesSlice } from './store/redusers/GamesSlice';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchGames } from './store/redusers/ActionCreators';

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
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.gamesReducer);

  useEffect(() => {
    dispatch(fetchGames());
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <div>
              {error && <h1>error</h1>}
              {/* {JSON.stringify(items)} */}
            </div>
            <PageMain />
          </>
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
