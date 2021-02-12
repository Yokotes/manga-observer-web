import viewVariables from 'src/views/variables';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 80px;
  height: 100vh;
  background-color: ${viewVariables.secondColor};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export { StyledHeader };
