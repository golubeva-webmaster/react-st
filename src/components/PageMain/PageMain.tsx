import SearchPanel from '../SearchPanel/SearchPanel';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { getList } from '../../utils/FetchData';
import SearchResult from '../SearchResult/SearchResult';
import { IResponseItem } from '../../types';
import classes from './PageMain.module.scss';
import { Outlet, NavLink, useSearchParams } from 'react-router-dom';
import Pagination from '../pagination/Pagination';

const PageMain = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') ?? ''
  );
  const [items, setItems] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);

  useEffect(() => {
    setPagesCount(Math.ceil(count / itemsPerPage));
    getData();
  }, [searchQuery, itemsPerPage, count, page]);

  const getData = async () => {
    try {
      const fetchedData = await getList(searchQuery, itemsPerPage, page);
      if (fetchedData) {
        setItems(fetchedData.results);
        setCount(fetchedData.count);
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

  const changeCountPerPage = (count: number) => {
    setPage(1);
    setItemsPerPage(count);
  };

  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const paginationClick = (e: React.ChangeEvent<HTMLElement>) => {
    const val = e.target.textContent;
    if (val) {
      setPage(Number(val));
      setSearchParams({ page: val });
      console.log(searchParams);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes['wrapper-content']}>
        <nav>
          <NavLink to="/">
            <button>clear detail info</button>
          </NavLink>
          <SearchPanel
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
          />
          <Pagination
            onChange={changeCountPerPage}
            pagesCount={pagesCount}
            page={page}
            itemsPerPage={itemsPerPage}
            paginationClick={paginationClick}
          />
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
