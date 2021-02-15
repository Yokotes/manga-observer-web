import styled from 'styled-components';

const StyledSearch = styled.form`
  flex-grow: 1;
  max-width: 1000px;
  margin-right: 20px;

  & > .search__input {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    padding: 10px 10px;
    width: 100%;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

    &:placeholder {
      font-size: 1rem;
    }
  }
`;

export default StyledSearch;
