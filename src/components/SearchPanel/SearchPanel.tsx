import classes from './SearchPanel.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gamesSlice } from '../../store/redusers/GamesSlice';

const SearchPanel = () => {
  const { searchQuery } = useAppSelector((state) => state.gamesReducer);
  const dispatch = useAppDispatch();

  return (
    <>
      <form className={classes.container}>
        <input
          type="text"
          id="search-bar"
          className={classes['search-bar']}
          placeholder={searchQuery}
          value={searchQuery}
          onChange={dispatch(gamesSlice.actions.setQuerySelector(value))}
        />
        {/* <Button text="🔍" onSubmit={onSubmit} /> */}
      </form>
    </>
  );
};

export default SearchPanel;
