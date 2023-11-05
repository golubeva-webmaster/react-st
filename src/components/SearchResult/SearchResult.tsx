import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './SearchResult.module.scss';
import Tags from '../Tags/Tags';
import { NavLink } from 'react-router-dom';

const SearchResult = (props: { items: IResponseItem[] }): ReactElement => {
  return (
    <div className={classes.col}>
      {props.items.map((item: IResponseItem) => (
        <NavLink to={`detail/${item.id}`} key={item.id}>
          <div className={classes.card}>
            <img src={item.background_image} alt={item.name} />
            <div className={classes.card_text}>
              <b>{item.name}</b>
              {item.tags.length ? <Tags items={item.tags} /> : ''}
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default SearchResult;
