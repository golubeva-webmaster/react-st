import classes from './SearchPanel.module.scss';
import Button from '../Button/Button';
import React from 'react';
import { Context } from '../../contexts/AppContext/AppContextProvider';

const SearchPanel = () => {
  const { searchQuery, handleInputChange, onSubmit } =
    React.useContext(Context);

  return (
    <>
      <form className={classes.container}>
        <input
          type="text"
          id="search-bar"
          className={classes['search-bar']}
          placeholder={searchQuery}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button text="🔍" onSubmit={onSubmit} />
      </form>
    </>
  );
};

export default SearchPanel;
