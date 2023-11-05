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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageMain />} errorElement={<Error />}>
        <Route path="detail/:id" element={<Detail />} loader={loader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
