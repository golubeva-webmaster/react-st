import SearchPanel from '../SearchPanel/SearchPanel';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { getList, getItem } from '../../utils/FetchData';
import SearchResult from '../SearchResult/SearchResult';
import { IResponseItem, IResponseItemDetail } from '../../types';
import './PageMain.module.scss';
import Detail from '../Detail/Detail';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from 'react-router-dom';

const PageMain = () => {
  //   Vladislav(@chervyakov-vladislav) — Сегодня, в 9:03
  // const StateContext = React.createContext<тип данных>(данные);
  // получение: Хук юз контект вернет значение, можете записать его в переменную
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') ?? ''
  );
  const [items, setItems] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDetailLoading, setIsDetailLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState({ id: 0 });

  useEffect(() => {
    getData(searchQuery);
  }, [searchQuery]);

  const getData = async (search: string) => {
    try {
      const fetchedData = await getList(search);
      if (fetchedData) {
        setItems(fetchedData);
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const onItemClick = async (id: number) => {
    try {
      setIsDetailLoading(true);
      const fetchedData = await getItem(id);
      if (fetchedData) {
        setCurrentItem(fetchedData);
        setIsDetailLoading(false);
      }
    } catch (e) {
      setIsDetailLoading(false);
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

  const clearButtonClick = () => {
    setCurrentItem({ id: 0 });
  };

  return (
    <div className="wrapper">
      {/* <h1>List of games</h1> */}
      {/* <header>HEADER</header> */}
      <div className="wrapper-content">
        <nav>
          <button onClick={clearButtonClick}>clear detail info</button>
          <SearchPanel
            onSubmit={onSubmit}
            handleInputChange={handleInputChange}
            searchQuery={searchQuery}
          />
          {isLoading ? (
            <Loader />
          ) : (
            <SearchResult
              items={items as IResponseItem[]}
              onItemClick={onItemClick}
            />
          )}
        </nav>
        <section>
          {currentItem.id ? (
            isDetailLoading ? (
              <Loader />
            ) : (
              <Detail item={currentItem as IResponseItemDetail} />
            )
          ) : (
            ''
          )}
        </section>
      </div>
    </div>
  );
};

export default PageMain;
