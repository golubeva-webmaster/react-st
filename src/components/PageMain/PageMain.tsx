import SearchPanel from '../SearchPanel/SearchPanel';
import React from 'react';
import Loader from '../Loader/Loader';
import SearchResult from '../SearchResult/SearchResult';
import classes from './PageMain.module.scss';
import { Outlet } from 'react-router-dom';
import Pagination from '../pagination/Pagination';
import {
  Context,
  AppContextProvider,
} from '../../contexts/AppContext/AppContextProvider';

const PageMain = () => {
  const { isLoading } = React.useContext(Context);

  return (
    <div className={classes.wrapper}>
      <div className={classes['wrapper-content']}>
        <AppContextProvider>
          <nav>
            <SearchPanel />
            <Pagination />
            {isLoading ? <Loader /> : <SearchResult />}
          </nav>
        </AppContextProvider>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default PageMain;
