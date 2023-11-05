import { ReactElement } from 'react';
import { ITag } from '../../types';
import classes from './Tags.module.scss';

const Tags = (props: { items: ITag[] }): ReactElement => {
  props.items.length = 6;
  return (
    <div>
      <ul className={classes.tags}>
        {props.items.map((item: ITag) => {
          return (
            <li key={item.id}>
              <p className={classes.link} href="#">
                {item.name}
                <span>{item.games_count}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Tags;
