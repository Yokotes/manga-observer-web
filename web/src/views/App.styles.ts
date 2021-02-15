import styled from 'styled-components';
import viewVariables from './variables';

const StyledApp = styled.div`
  display: flex;
  background-color: ${viewVariables.bgColor};

  & > .content {
    flex-grow: 1;
    padding: 0px 20px;
    max-width: 1700px;
    margin: 0 auto;
  }
`;

export default StyledApp;
