import SearchPanel from '../SearchPanel/SearchPanel';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { getList } from '../../utils/FetchData';
import SearchResult from '../SearchResult/SearchResult';
import { IResponseItem } from '../../types';
import classes from './PageMain.module.scss';
import { Outlet, NavLink } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';

const PageMain = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') ?? ''
  );
  const [items, setItems] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    alert('Уважаемый коллега! Прошу проверить мою работу во вторник.');
    getData();
  }, [searchQuery, itemsPerPage]);

  const getData = async () => {
    try {
      const fetchedData = await getList(searchQuery, itemsPerPage);
      if (fetchedData) {
        setItems(fetchedData);
        console.log(fetchedData);
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = () => {
    localStorage.setItem('searchQuery', searchQuery);
    setSearchQuery(searchQuery);
  };

  const changeCountPerPage = (count: number) => {
    console.log('2 count', count);
    setItemsPerPage(count);
  };

  return (
    <div className={classes.wrapper}>
      {/* <h1>List of games</h1>
      <header>HEADER</header> */}
      <div className={classes['wrapper-content']}>
        <nav>
          <NavLink to="/">
            <button>clear detail info</button>
          </NavLink>
          <SearchPanel
            onSubmit={onSubmit}
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
          />
          <Pagination onChange={changeCountPerPage} />
          {isLoading ? (
            <Loader />
          ) : (
            <SearchResult items={items as IResponseItem[]} />
          )}
        </nav>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default PageMain;
