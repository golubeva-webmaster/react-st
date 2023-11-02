import classes from './SearchPanel.module.scss';
import Button from '../Button/Button';

const SearchPanel = ({
  searchQuery = '',
  handleInputChange = () => {},
  onSubmit = () => {},
}) => {
  return (
    <>
      <form className={classes.container} onSubmit={onSubmit}>
        <input
          type="text"
          id="search-bar"
          className={classes['search-bar']}
          placeholder={searchQuery}
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Button text="🔍" />
      </form>
    </>
  );
};

export default SearchPanel;
