import viewVariables from 'src/views/variables';
import styled from 'styled-components';

const StyledMoreBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${viewVariables.mainColor};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  // padding-top: 20px;
  border-top: 1px solid #fff3;

  &:focus {
    outline: none;
  }
`;

export default StyledMoreBtn;
