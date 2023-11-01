import SearchPanel from '../SearchPanel/SearchPanel';
import SearchResult from '../SearchResult/SearchResult';
import React from 'react';
import { IState } from '../../types';
import Loader from '../Loader/Loader';
import ApiClient from '../../utils/FetchData';

interface I {}

export default class PageMain extends React.Component {
  state: IState;
  private apiClient: ApiClient;
  constructor(props: I | Readonly<I>) {
    super(props);
    this.apiClient = new ApiClient();
    this.state = {
      searchQuery: localStorage.getItem('searchQuery') ?? '',
      items: [],
      isLoading: true,
      hasError: false,
    };
  }

  async componentDidMount() {
    const { searchQuery } = this.state;
    this.setState({ items: [], isLoading: true });
    this.getData(searchQuery);
  }

  onSubmit = () => {
    localStorage.setItem('searchQuery', this.state.searchQuery);
    this.getData(this.state.searchQuery);
  };

  getData = async (searchQuery: string) => {
    try {
      const fetchedData = await this.apiClient.getData(searchQuery);
      if (fetchedData) {
        this.setState({ items: fetchedData, isLoading: false });
        console.log(fetchedData);
      }
    } catch (e) {
      this.setState({ isLoading: false });
      console.error(e);
    }
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('searchQuery', e.target.value);
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { isLoading, searchQuery, items } = this.state;
    return (
      <>
        <SearchPanel
          onSubmit={this.onSubmit}
          handleInputChange={this.handleInputChange}
          searchQuery={searchQuery}
        />
        {isLoading ? <Loader /> : <SearchResult data={items} />}
      </>
    );
  }
}
