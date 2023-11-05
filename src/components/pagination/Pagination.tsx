import { NavLink } from 'react-router-dom';
import classes from './Pagination.module.scss';
import { ChangeEvent } from 'react';

// const Pagination = () => {
const Pagination = (props: { onChange: (count: number) => void }) => {
  const { onChange } = props;

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <>
      <nav className={classes.pagination} role="navigation">
        <NavLink
          className={[classes.pagination_link, classes.prev].join(' ')}
          to="/"
        ></NavLink>
        <NavLink to="/" className={classes.pagination_link}>
          1
        </NavLink>
        <NavLink to="/" className={classes.pagination_link}>
          2
        </NavLink>
        <NavLink
          to="/"
          className={[classes.pagination_link, classes.active].join(' ')}
        >
          3
        </NavLink>
        <NavLink to="/" className={classes.pagination_link}>
          4
        </NavLink>
        <NavLink to="/" className={classes.pagination_link}>
          5
        </NavLink>
        <NavLink
          to="/"
          className={[classes.pagination_link, classes.next].join(' ')}
        ></NavLink>

        <select
          name="count"
          id="pet-select"
          className={classes.pagination_select}
          onChange={onChangeValue}
        >
          <option value="5">2</option>
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
