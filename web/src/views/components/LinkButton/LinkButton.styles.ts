import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledLinkButton = styled.button`
  color: ${viewVariables.mainColor};
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledLinkButton;
