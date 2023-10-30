import './SearchPanel.css';
import React from 'react';
import { IState, IItem } from '../types';

interface I {}

export default class SearchPanel extends React.Component {
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
    console.log('TODO сделать выборку по', query);
    fetch('https://stapi.co/api/v2/rest/book/search')
      .then((res) => res.json())
      .then((json) => {
        console.log('all:', json);
        const select = json.books.filter((el: IItem) =>
          el.title.includes(query)
        );
        this.state.items = select;
        this.setState({ items: select });
        this.setState({ isLoading: false });
        console.log('выборка:', select);
        console.log('state:', this.state);
      });
  }

  render() {
    return (
      <>
        pageMain:{this.state.searchQuery}
        <br />
        {/* <SearchPanel /> */}
      </>
    );
  }
}
