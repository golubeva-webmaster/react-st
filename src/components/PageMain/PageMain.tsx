import SearchPanel from '../SearchPanel/SearchPanel';
import React from 'react';
import Loader from '../Loader/Loader';
import CardList from '../CardList/CardList';
import classes from './PageMain.module.scss';
import { Outlet } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
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
            {isLoading ? <Loader /> : <CardList />}
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
