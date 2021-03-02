import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledPrimaryButton = styled.button`
  border: none;
  background-color: ${viewVariables.mainColor};
  color: #fff;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 15px 25px;
  border-radius: 15px;
  cursor: pointer;
  text-transform: uppercase;
  transition: box-shadow 0.5s, text-shadow 0.5s;

  &:hover {
    box-shadow: 0px 0px 6px ${viewVariables.mainColor};
    text-shadow: 0px 0px 5px #fff;
  }

  &:focus {
    outline: none;
  }
`;

export default StyledPrimaryButton;
