import './App.module.scss';
import Detail, { loader } from './components/Detail/Detail';
import PageMain from './components/PageMain/PageMain';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import Error from './routes/Error';

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageMain />} errorElement={<Error />}>
        <Route path="detail/:id" element={<Detail />} loader={loader} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* <LocationDisplay /> */}
    </>
  );
}

export default App;
