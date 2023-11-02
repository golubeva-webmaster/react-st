import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './SearchResult.module.scss';

const SearchResult = (props: { items: IResponseItem[] }): ReactElement => {
  return (
    <div className={classes.col}>
      {props.items.map((item: IResponseItem) => (
        <div className={classes.card} key={item.id}>
          <b>{item.name}</b>
        </div>
      ))}
    </div>
  );
};
export default SearchResult;
