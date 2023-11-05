import { IResponseItemDetail } from '../../types';
import classes from './Detail.module.scss';
import { useLoaderData, LoaderFunctionArgs, NavLink } from 'react-router-dom';
import { getItem } from '../../utils/FetchData';
import Loader from '../Loader/Loader';

let isLoading = false;

export const loader = async ({
  params,
}: LoaderFunctionArgs): Promise<IResponseItemDetail | void> => {
  isLoading = true;
  const game: IResponseItemDetail = await getItem(params.id as string);
  if (game) isLoading = false;
  return game;
};

const Detail = () => {
  const item = (useLoaderData() as IResponseItemDetail) ?? {};

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
            <h2>{item.name}</h2>
            <div> {item.description_raw} </div>
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
