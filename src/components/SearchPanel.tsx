import { Component } from 'react';
import './SearchPanel.css';
import { ISearchPanel } from '../types';
import Button from './Button';

export default class SearchPanel extends Component<ISearchPanel> {
  render() {
    const { searchQuery, handleInputChange, onSubmit } = this.props;
    return (
      <>
        <form className="search-container" onSubmit={onSubmit}>
          <input
            type="text"
            id="search-bar"
            placeholder={searchQuery}
            value={searchQuery}
            onChange={handleInputChange}
          />
          <Button text="🔍" />
        </form>
      </>
    );
  }
}
