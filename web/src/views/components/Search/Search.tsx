import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/views/store';
import { StyledSearch } from './Search.styles';
import SearchAutocomplete from './Autocomplete';
import { setValue } from './SearchSlice';

const Search = () => {
  const searchValue = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  return (
    <StyledSearch>
      <input
        className="search__input"
        onChange={(e) => dispatch(setValue(e.currentTarget.value))}
        placeholder="Find manga..."
      />
      <SearchAutocomplete search={searchValue} />
    </StyledSearch>
  );
};

export default Search;
