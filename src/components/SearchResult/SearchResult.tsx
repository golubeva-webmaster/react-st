import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './SearchResult.module.scss';
import Tags from '../Tags/Tags';

const SearchResult = (props: {
  items: IResponseItem[];
  onItemClick: (id: number) => void;
}): ReactElement => {
  return (
    <div className={classes.col}>
      {props.items.map((item: IResponseItem) => (
        <div
          className={classes.card}
          key={item.id}
          onClick={() => props.onItemClick(item.id)}
        >
          <img src={item.background_image} alt={item.name} />
          <div className={classes.card_text}>
            <b>{item.name}</b>
            {item.tags.length ? <Tags items={item.tags} /> : ''}
          </div>
        </div>
      ))}
    </div>
  );
};
export default SearchResult;
