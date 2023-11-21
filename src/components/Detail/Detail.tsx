import { IResponseItemDetail } from '../../types';
import classes from './Detail.module.scss';
import Loader from '../Loader/Loader';
import { gamesAPI } from '../../services/GamesService';
import { useAppSelector } from '../../hooks/redux';
import { NavLink } from 'react-router-dom';

const Detail = () => {
  const { detailId } = useAppSelector((state) => state.gamesReducer);
  const { data, isLoading } = gamesAPI.useGameDetailsQuery(String(detailId));
  const item: IResponseItemDetail = data ?? {
    id: 0,
    slug: '',
    name: '',
    name_original: '',
    description_raw: '',
    released: '',
    tba: false,
    updated: '',
    background_image: '',
    background_image_additional: '',
    website: '',
    rating: 0,
    rating_top: 0,
    added: 0,
  };

  return (
    <>
      <div className={classes['card']}>
        {isLoading && <Loader />}
        <NavLink to="/">
          <div className={classes['close-btn']}></div>
        </NavLink>
        <div className={classes['card-title']}>
          <img src={item['background_image']} alt="" />
          <div className={classes['card-info']}>
            {item.name && <h2>{item.name}</h2>}
            {item.description_raw && <div> {item.description_raw} </div>}
          </div>
        </div>
        <div className={classes['card-body']}>
          {item.rating && (
            <p>
              <span>Rating :</span> {item.rating}
            </p>
          )}
          {item.added && (
            <p>
              <span>Added :</span> {item.added}
            </p>
          )}
          {item.updated && (
            <p>
              <span>Updated :</span> {item.updated}
            </p>
          )}
          {item.website && (
            <p>
              <span>Website :</span> {item.website}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
