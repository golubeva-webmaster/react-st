import { Component } from 'react';
import React from 'react';

interface ISearchResult {
  searchValue: string;
}

export default class SearchResult extends Component<ISearchResult> {
  searchValue: string;
  constructor(props: ISearchResult | Readonly<ISearchResult>) {
    super(props);
    this.searchValue = this.props.searchValue;
  }

  render() {
    return <>comp searchResult searchValue: {this.props.searchValue}</>;
  }
}
