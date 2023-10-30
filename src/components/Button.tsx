import { Component } from 'react';
import { IButtonProps } from '../types';

export default class Button extends Component<IButtonProps> {
  render() {
    const { text } = this.props;
    return (
      <button className="searchButton" type="submit">
        {text}
      </button>
    );
  }
}
