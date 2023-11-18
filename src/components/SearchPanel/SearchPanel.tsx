import classes from './SearchPanel.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gamesSlice } from '../../store/redusers/GamesSlice';
import Button from '../Button/Button';
import { fetchGames } from '../../store/redusers/ActionCreators';

const SearchPanel = () => {
  const { searchQuery } = useAppSelector((state) => state.gamesReducer);
  const dispatch = useAppDispatch();

  const onSubmit = () => {
    localStorage.setItem('searchQuery', searchQuery ?? '');
    dispatch(fetchGames()); //searchQuery
  };

  return (
    <>
      <form className={classes.container}>
        <input
          type="text"
          id="search-bar"
          className={classes['search-bar']}
          placeholder={searchQuery}
          value={searchQuery}
          onChange={(event) =>
            dispatch(gamesSlice.actions.setQuerySelector(event.target.value))
          }
        />
        <Button text="🔍" onSubmit={onSubmit} />
      </form>
    </>
  );
};

export default SearchPanel;
