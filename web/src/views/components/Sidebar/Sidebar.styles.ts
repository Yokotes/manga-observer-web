import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  width: 80px;
  height: 100vh;
  background-color: ${viewVariables.secondColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { StyledSidebar };
