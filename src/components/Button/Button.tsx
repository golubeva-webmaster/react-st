import { Component } from 'react';
import { IButtonProps } from '../../types';
import classes from './Button.module.scss';

export default class Button extends Component<IButtonProps> {
  render() {
    const { text } = this.props;
    return (
      <button className={classes.searchButton} type="submit">
        {text}
      </button>
    );
  }
}
