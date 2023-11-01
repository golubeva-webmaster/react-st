import { Component } from 'react';
import classes from './Icon.module.scss';

interface IIcon {
  onClick?: () => void;
  icon: string;
}

export default class Icon extends Component<IIcon> {
  render() {
    const { onClick, icon } = this.props;
    return (
      <a onClick={onClick} className={classes.button}>
        <img className={classes['search-icon']} src={icon} />
      </a>
    );
  }
}
