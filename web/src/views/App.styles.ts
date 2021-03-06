import styled from 'styled-components';
import viewVariables from './variables';

const StyledApp = styled.div`
  display: flex;
  background-color: ${viewVariables.bgColor};

  & > .content {
    flex-grow: 1;
    padding: 0px 30px;
    max-height: 100vh;
    overflow: auto;
  }
`;

export default StyledApp;
