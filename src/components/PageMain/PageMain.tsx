import SearchPanel from '../SearchPanel/SearchPanel';
import CardList from '../CardList/CardList';
import classes from './PageMain.module.scss';
import { Outlet } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const PageMain = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['wrapper-content']}>
        <nav>
          <SearchPanel />
          <Pagination />
          {<CardList />}
        </nav>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default PageMain;
