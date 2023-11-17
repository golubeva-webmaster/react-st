import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './CardList.module.scss';
import { Message } from '../message/Message';
import Card from '../Card/Card';
import { useAppSelector } from '../../hooks/redux';

const CardList = (): ReactElement => {
  const { items } = useAppSelector((state) => state.gamesReducer);

  return (
    <div className={classes.col}>
      {items.length ? (
        items.map((item: IResponseItem) => {
          return <Card item={item} key={item.id} />;
        })
      ) : (
        <Message type="warning" text="Sorry. List is empty." key="message" />
      )}
    </div>
  );
};
export default CardList;
