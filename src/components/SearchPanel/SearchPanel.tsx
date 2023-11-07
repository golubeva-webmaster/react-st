import classes from './SearchPanel.module.scss';
import Button from '../Button/Button';

const SearchPanel = ({
  searchQuery = '',
  handleInputChange = () => {}, //e: React.ChangeEvent<HTMLInputElement>
}) => {
  const onSubmit = () => {
    localStorage.setItem('searchQuery', searchQuery);
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
          onChange={handleInputChange}
        />
        <Button text="🔍" onSubmit={onSubmit} />
      </form>
    </>
  );
};

export default SearchPanel;
