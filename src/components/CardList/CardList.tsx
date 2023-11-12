import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './CardList.module.scss';
import { Context } from '../../contexts/AppContext/AppContextProvider';
import React from 'react';
import { Message } from '../message/Message';
import Card from '../Card/Card';

const CardList = (): ReactElement => {
  const { items } = React.useContext(Context);

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
