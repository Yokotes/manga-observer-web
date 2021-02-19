import styled from 'styled-components';

const StyledTextInput = styled.input`
  font-size: 1.05rem;
  font-family: 'Roboto', sans-serif;
  padding: 10px 12px;
  width: 100%;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
`;

export default StyledTextInput;
