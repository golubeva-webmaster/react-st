import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './CardList.module.scss';
import { Context } from '../../contexts/AppContext/AppContextProvider';
import React from 'react';
import { Message } from '../message/Message';
import Card from '../Card/Card';
import { LocationDisplay } from '../../App';
import { NavLink } from 'react-router-dom';

const CardList = (): ReactElement => {
  const { items } = React.useContext(Context);

  return (
    <div className={classes.col}>
      {items.length ? (
        // items.map((item: IResponseItem) => <p key={item.id}>{item.name}</p>)
        items.map((item: IResponseItem) => {
          return (
            <NavLink to={`detail/${item.id}`} key={item.id}>
              <Card item={item} key={item.id} />
            </NavLink>
          );
        })
      ) : (
        <Message type="warning" text="Sorry. List is empty." key="message" />
      )}
      <LocationDisplay />
    </div>
  );
};
export default CardList;
