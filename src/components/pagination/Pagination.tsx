import { NavLink } from 'react-router-dom';
import classes from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gamesSlice } from '../../store/redusers/GamesSlice';

const Pagination = () => {
  const dispatch = useAppDispatch();

  //& берем из стейта
  const { page, itemsPerPage, count } = useAppSelector(
    (state) => state.gamesReducer
  );

  const pagesCount = Math.round(count / itemsPerPage);
  const pages = [];
  for (let i = 1; i < pagesCount; i++) {
    if (
      [1, page - 2, page - 1, page, page + 1, page + 2].includes(i) ||
      [pagesCount, pagesCount - 1, pagesCount - 2].includes(i)
    ) {
      pages.push(
        <NavLink
          to={{
            pathname: '/',
            search: `?page=${i}`,
          }}
          className={
            i === page
              ? [classes.pagination_link, classes.pagination_link_active].join(
                  ' '
                )
              : classes.pagination_link
          }
          key={i}
          onClick={() => dispatch(gamesSlice.actions.setPage(Number(i)))}
        >
          {i}
        </NavLink>
      );
    }
    if ([page - 3, page + 3].includes(i)) {
      pages.push('...');
    }
  }

  return (
    <>
      <br />
      <nav className={classes.pagination} role="navigation">
        {pages}

        <select
          name="count"
          id="pet-select"
          className={classes.pagination_select}
          onChange={(e) =>
            dispatch(gamesSlice.actions.setItemsPerPage(Number(e.target.value)))
          }
          value={itemsPerPage}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </nav>
    </>
  );
};

export default Pagination;
