import SearchPanel from '../SearchPanel/SearchPanel';
import React from 'react';
import Loader from '../Loader/Loader';
import CardList from '../CardList/CardList';
import classes from './PageMain.module.scss';
import { Outlet } from 'react-router-dom';
// import Pagination from '../Pagination/Pagination';
import { useAppSelector } from '../../hooks/redux';

const PageMain = () => {
  const { isLoading } = useAppSelector((state) => state.gamesReducer);

  return (
    <div className={classes.wrapper}>
      <div className={classes['wrapper-content']}>
        <nav>
          <SearchPanel />
          {/* <Pagination /> */}
          {isLoading ? <Loader /> : <CardList />}
        </nav>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default PageMain;
