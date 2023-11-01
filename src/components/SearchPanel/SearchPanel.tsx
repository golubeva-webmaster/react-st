import { Component } from 'react';
import classes from './SearchPanel.module.scss';
import { ISearchPanel } from '../../types';
import Button from '../Button/Button';

export default class SearchPanel extends Component<ISearchPanel> {
  render() {
    const { searchQuery, handleInputChange, onSubmit } = this.props;
    return (
      <>
        <form className={classes.container} onSubmit={onSubmit}>
          <input
            type="text"
            id="search-bar"
            className={classes['search-bar']}
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
