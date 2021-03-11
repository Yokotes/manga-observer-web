import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledSearch = styled.form`
  flex-grow: 1;
  max-width: 1000px;
  margin-right: 40px;
  margin-bottom: 0;
  display: block;
  position: relative;

  & > .search__input {
    font-size: 1.1rem;
    font-family: 'Roboto', sans-serif;
    padding: 10px 10px;
    width: 100%;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

    &:focus {
      outline: none;
    }
  }
`;

const StyledAutocomplete = styled.div`
  background-color: ${viewVariables.menuColor};
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 10px 15px;
  position: absolute;
  top: 40px;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  z-index: 10;
`;

const StyledAutocompleteItem = styled.div`
  padding: 10px 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  cursor: pointer;

  & > .item {
    &__img {
      width: 50px;
      margin-right: 20px;
    }

    &__title {
      font-family: 'Roboto', sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      margin: 0;
    }
  }

  &:hover {
    background-color: #00000011;
  }
`;

export { StyledAutocomplete, StyledSearch, StyledAutocompleteItem };
