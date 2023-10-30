import { Component } from 'react';
import './Icon.css';

interface IIcon {
  onClick?: () => void;
  icon: string;
}

export default class Icon extends Component<IIcon> {
  render() {
    const { onClick, icon } = this.props;
    return (
      <a onClick={onClick} className="button">
        <img className="search-icon" src={icon} />
      </a>
    );
  }
}
