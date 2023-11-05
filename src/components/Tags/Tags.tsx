import { ReactElement } from 'react';
import { ITag } from '../../types';
import classes from './Tags.module.scss';

const Tags = (props: { items: ITag[] }): ReactElement => {
  return (
    <div>
      <ul className={classes.tags}>
        {props.items.slice(0, 6).map((item: ITag) => {
          return (
            <li key={item.id}>
              <p className={classes.link}>
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
