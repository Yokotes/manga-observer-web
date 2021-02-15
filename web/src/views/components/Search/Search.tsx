import * as React from 'react';
import StyledSearch from './Search.styles';

const Search = () => {
  return (
    <StyledSearch>
      <input className="search__input" placeholder="Find manga..." />
    </StyledSearch>
  );
};

export default Search;
