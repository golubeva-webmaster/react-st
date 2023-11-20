import classes from './SearchPanel.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { gamesSlice } from '../../store/redusers/GamesSlice';
import Button from '../Button/Button';
import { useState } from 'react';

const SearchPanel = () => {
  const { searchQuery } = useAppSelector((state) => state.gamesReducer);
  const dispatch = useAppDispatch();

  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  return (
    <>
      <form className={classes.container}>
        <input
          type="text"
          id="search-bar"
          className={classes['search-bar']}
          placeholder={searchQuery}
          value={localSearchQuery}
          onChange={(event) => setLocalSearchQuery(event.target.value)}
        />
        <Button
          text="🔍"
          onSubmit={() =>
            dispatch(gamesSlice.actions.setSearchQuery(localSearchQuery ?? ''))
          }
        />
      </form>
    </>
  );
};

export default SearchPanel;
