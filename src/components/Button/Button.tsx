import classes from './Button.module.scss';

const Button = ({ text = '' }) => {
  return (
    <button className={classes.searchButton} type="submit">
      {text}
    </button>
  );
};

export default Button;
