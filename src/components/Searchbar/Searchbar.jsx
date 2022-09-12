import React, { useState } from 'react';
import {
  SearchBarStyled,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';

export function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  }

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => {
            setQuery(e.currentTarget.value);
          }}
        />
      </SearchForm>
    </SearchBarStyled>
  );
}
