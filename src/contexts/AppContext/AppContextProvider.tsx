import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getList } from '../../utils/FetchData';

const contextInitial = {
  searchQuery: '',
  handleInputChange: () => {}, //e: React.ChangeEvent<HTMLInputElement>
  onSubmit: () => {},
  page: 1,
  itemsPerPage: 10,
  changeCountPerPage: () => {}, //count: number
  items: [],
  isLoading: false,
  count: 0,
  pagesCount: 0,
  paginationClick: () => {}, //e: React.ChangeEvent<HTMLElement>
};
export const Context = React.createContext(contextInitial);

export const AppContextProvider = ({
  children,
  ...props
}: {
  children: ReactNode;
}) => {
  const context = useCreateAppContext(props); //создает объект-хранилище.
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

//& создадим в провайдере кастомный хук useAppContext, чтобы не экспортировать контекст
//& и не передавать его каждый раз параметром из компонентов, в которых мы будем использовать стор:
export function useAppContext() {
  const context = React.useContext(Context);
  if (!context) throw new Error('Use app context within provider!');
  return context;
}

//& Возвращает объект который мы будем хранить в Provider value.
export const useCreateAppContext = function (props: { searchQuery?: string }) {
  const [searchQuery, setSearchQuery] = useState(
    props.searchQuery || localStorage.getItem('searchQuery') || ''
  );
  const [items, setItems] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(33);
  const [pagesCount, setPagesCount] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

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

  useEffect(() => {
    setPagesCount(Math.ceil(count / itemsPerPage));
    getData();
  }, [searchQuery, itemsPerPage, count, page, getData]);

  const onSubmit = () => {
    localStorage.setItem('searchQuery', searchQuery ?? '');
  };

  const changeCountPerPage = (count: number) => {
    setPage(1);
    setItemsPerPage(count);
  };

  const paginationClick = (e: React.ChangeEvent<HTMLElement>) => {
    const val = e.target.textContent;
    if (val) {
      setPage(Number(val));
      setSearchParams({ page: val });
      console.log(searchParams);
    }
  };

  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  return {
    searchQuery,
    handleInputChange,
    onSubmit,

    page,
    itemsPerPage,
    changeCountPerPage,
    items,
    isLoading,
    count,
    pagesCount,
    paginationClick,
  };
};
