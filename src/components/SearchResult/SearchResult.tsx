import { Component } from 'react';
import { ISearchResult } from '../../types';
import classes from './SearchResult.module.scss';

export default class SearchResult extends Component<ISearchResult> {
  render() {
    const { data } = this.props;
    return (
      <div className={classes.col}>
        {data.map((item) => (
          <div className={classes.card} key={item.id}>
            <b>{item.name}</b>
            <ul>
              {/* <li>
                {item.numberOfPages
                  ? `Number of pages: ${item.numberOfPages}`
                  : ''}
              </li>
              <li>
                {item.numberOfPages
                  ? `Published date: ${item.publishedDay}-${item.publishedMonth}-${item.publishedYear}`
                  : ''}
              </li> */}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
