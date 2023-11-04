import { IResponseItemDetail } from '../../types';
import classes from './Detail.module.scss';
import parse from 'html-react-parser';

export default function Detail(Props: { item: IResponseItemDetail }) {
  const { item } = Props;
  return (
    <>
      <div className={classes['card']}>
        <div className={classes['card-title']}>
          <img src={item.background_image} alt="" />
          <div className={classes['card-info']}>
            <h2>{item.name}</h2>
            <div> {parse(item.description as string)} </div>
          </div>
        </div>

        <div className={classes['card-body']}>
          <p>
            <span>Gender :</span> Male
          </p>
          <p>
            <span>Email :</span> markzuck@example.com
          </p>
          <p>
            <span>Age :</span> 25{' '}
          </p>
          <p>
            <span>Location :</span> Near Kathmandu
          </p>
          <p>
            <span>Joined Date :</span> 2019-02-22
          </p>
          <p>
            <span>Contact no. :</span> 9863265226, 9568442262
          </p>
        </div>
      </div>
    </>
  );
}
