import classes from './Button.module.scss';

const Button = ({ text = '', onSubmit = () => {} }) => {
  return (
    <button className={classes.searchButton} type="submit" onClick={onSubmit}>
      {text}
    </button>
  );
};

export default Button;
