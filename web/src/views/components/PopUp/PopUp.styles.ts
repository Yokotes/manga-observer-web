import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledPopUpContainer = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;

  & > .popUp {
    position: relative;
    border: 2.5px solid ${viewVariables.messageColor};
    background-color: ${viewVariables.messageColor}33;
    border-radius: 10px;
    padding: 20px 40px;
    font-family: 'Roboto', sans-serif;
    margin-top: 10px;
    text-align: center;
  }

  & > .popUp.error {
    background-color: ${viewVariables.mainColor}33;
    border-color: ${viewVariables.mainColor};
  }

  & > .popUp.warning {
    background-color: ${viewVariables.warningColor}33;
    border-color: ${viewVariables.warningColor};
  }
`;

const StyledPopUpCloseBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export { StyledPopUpContainer, StyledPopUpCloseBtn };
