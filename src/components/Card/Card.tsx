import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './Card.module.scss';
import Tags from '../Tags/Tags';
import { NavLink } from 'react-router-dom';

const Card = (props: { item: IResponseItem }): ReactElement => {
  const item = props.item;

  return (
    <NavLink to={`detail/${item.id}`} key={item.id}>
      <div className={classes.card} key={item.id}>
        <img src={item.background_image} alt={item.name} />
        <div className={classes.card_text}>
          <b>{item.name}</b>
          {item.tags ? <Tags items={item.tags} /> : ''}
        </div>
      </div>
    </NavLink>
  );
};
export default Card;
