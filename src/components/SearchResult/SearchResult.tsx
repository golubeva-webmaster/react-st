import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './SearchResult.module.scss';
import Tags from '../Tags/Tags';
import { NavLink } from 'react-router-dom';
import { Context } from '../../contexts/AppContext/AppContextProvider';
import React from 'react';

const SearchResult = (): ReactElement => {
  const { items } = React.useContext(Context);

  return (
    <div className={classes.col}>
      {items.map((item: IResponseItem) => (
        <NavLink to={`detail/${item.id}`} key={item.id}>
          <div className={classes.card}>
            <img src={item.background_image} alt={item.name} />
            <div className={classes.card_text}>
              <b>{item.name}</b>
              {item.tags ? <Tags items={item.tags} /> : ''}
              item.tags.length
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default SearchResult;
