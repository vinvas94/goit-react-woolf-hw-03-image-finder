import React, { Component } from 'react';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('Write something in the search');
    } else {
      this.props.onSubmit(searchQuery);
      this.resetSearchQuery();
    }
  };

  resetSearchQuery = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormInput
            type="text"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <SearchFormButton
            type="submit"
            disabled={this.state.searchQuery === ''}
          >
            <span> Search</span>
          </SearchFormButton>
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default Searchbar;
