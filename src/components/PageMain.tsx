import SearchPanel from './SearchPanel';
import SearchResult from './SearchResult';
import React from 'react';
import { IState, IItem } from '../types';
import Loader from './Loader';

interface I {}

export default class PageMain extends React.Component {
  state: IState;
  constructor(props: I | Readonly<I>) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') ?? '',
      items: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { searchQuery } = this.state;
    await this.fetchData(searchQuery || '');
  }

  async fetchData(query: string) {
    this.setState({ items: [], isLoading: true });
    fetch('https://stapi.co/api/v2/rest/book/search')
      .then((res) => res.json())
      .then((json) => {
        const select = query
          ? json.books.filter((el: IItem) => el.title.includes(query))
          : json.books;
        this.setState({ items: select });
        this.setState({ isLoading: false });
      });
  }

  onSubmit = () => {
    localStorage.setItem('searchQuery', this.state.searchQuery);
    this.fetchData(this.state.searchQuery);
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchQuery', e.target.value);
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    return (
      <>
        <SearchPanel
          onSubmit={this.onSubmit}
          handleInputChange={this.handleInputChange}
          searchQuery={this.state.searchQuery}
        />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <SearchResult data={this.state.items} />
        )}
      </>
    );
  }
}
