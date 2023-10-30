import { Component } from 'react';
import './SearchPanel.css';
import Icon from './Icon';
import React from 'react';
import { ISearchPanel } from '../types';

export default class SearchPanel extends Component<ISearchPanel> {
  constructor(props: ISearchPanel | Readonly<ISearchPanel>) {
    super(props);
  }

  render() {
    return (
      <>
        <form className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="What do you want to find?"
            value={this.props.searchQuery}
          />
          {/* onChange={this.props.updateInput} */}
          <Icon icon="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" />
          {/* onClick={this.props.searchButtonClick} */}
        </form>
      </>
    );
  }
}
