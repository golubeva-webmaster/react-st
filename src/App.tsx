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
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchGames } from './store/redusers/ActionCreators';

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
            <div>{error && <h1>error</h1>}</div>
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
