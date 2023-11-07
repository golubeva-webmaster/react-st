import classes from './Icon.module.scss';

const Icon = ({ onClick = () => {}, icon = '' }) => {
  return (
    <a onClick={onClick} className={classes.button}>
      <img className={classes['search-icon']} src={icon} />
    </a>
  );
};

export default Icon;
