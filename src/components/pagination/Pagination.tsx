import { NavLink } from 'react-router-dom';
import classes from './Pagination.module.scss';
import { ChangeEvent } from 'react';
import { Context } from '../../contexts/AppContext/AppContextProvider';
import React from 'react';

const Pagination = () => {
  const {
    changeCountPerPage,
    pagesCount,
    page,
    itemsPerPage,
    paginationClick,
  } = React.useContext(Context);

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    changeCountPerPage(Number(e.target.value));
  };

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
          onClick={paginationClick}
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
      <nav className={classes.pagination} role="navigation">
        {pages}

        <select
          name="count"
          id="pet-select"
          className={classes.pagination_select}
          onChange={onChangeValue}
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
