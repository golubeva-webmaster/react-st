import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './CardList.module.scss';
import { Message } from '../message/Message';
import Card from '../Card/Card';
import { gamesAPI } from '../../services/GamesService';
import { useAppSelector } from '../../hooks/redux';
import Loader from '../Loader/Loader';

const CardList = (): ReactElement => {
  //& берем из стейта
  const { page, itemsPerPage, searchQuery } = useAppSelector(
    (state) => state.gamesReducer
  );
  //& передаем в rtk query
  const { data, isLoading } = gamesAPI.useGameListQuery({
    page_size: itemsPerPage,
    page: page,
    search: searchQuery ?? '',
  });
  const items = data?.results ?? [];

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.col}>
          {items.length ? (
            items.map((item: IResponseItem) => {
              return <Card item={item} key={item.id} />;
            })
          ) : (
            <Message
              type="warning"
              text="Sorry. List is empty."
              key="message"
            />
          )}
        </div>
      )}
    </>
  );
};
export default CardList;
