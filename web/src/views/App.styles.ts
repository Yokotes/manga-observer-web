import styled from 'styled-components';
import viewVariables from './variables';

const StyledApp = styled.div`
  display: flex;
  background-color: ${viewVariables.bgColor};

  & > .content {
    flex-grow: 1;
    padding: 0px 30px;

    & > .switch {
      border-top: 1px solid #00000033;
      margin-top: 25px;
      padding-top: 25px;
    }
  }
`;

export default StyledApp;
