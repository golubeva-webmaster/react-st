import SearchPanel from '../SearchPanel/SearchPanel';
import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import { getDataFromApi } from '../../utils/FetchData';
import SearchResult from '../SearchResult/SearchResult';
import { IResponseItem } from '../../types';

const PageMain = () => {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem('searchQuery') ?? ''
  );
  const [items, setItems] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(searchQuery);
  }, [searchQuery]);

  const getData = async (search: string) => {
    try {
      const fetchedData = await getDataFromApi(search);
      if (fetchedData) {
        setItems(fetchedData);
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

  return (
    <>
      <SearchPanel
        onSubmit={onSubmit}
        handleInputChange={handleInputChange}
        searchQuery={searchQuery}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <SearchResult items={items as IResponseItem[]} />
      )}
    </>
  );
};

export default PageMain;
