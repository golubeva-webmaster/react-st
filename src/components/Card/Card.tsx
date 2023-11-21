import { ReactElement } from 'react';
import { IResponseItem } from '../../types';
import classes from './Card.module.scss';
import Tags from '../Tags/Tags';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { gamesSlice } from '../../store/redusers/GamesSlice';

const Card = (props: { item: IResponseItem }): ReactElement => {
  const dispatch = useAppDispatch();
  const item = props.item;

  const onClick = (id: number = 0) => {
    dispatch(gamesSlice.actions.setDetailId(id));
  };

  return (
    <>
      <div className={classes.card}>
        <NavLink
          to={`detail/${item.id}`}
          key={item.id}
          data-testid={item.id}
          onClick={() => onClick(item.id)}
        >
          <img src={item.background_image} alt={item.name} />
          <div className={classes.card_text}>
            <b data-testid="item_name">{item.name}</b>
            {item.tags ? <Tags items={item.tags} /> : ''}
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default Card;
