import viewVariables from 'src/views/variables';
import styled from 'styled-components';

const StyledNav = styled.nav`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  flex-grow: 1;
  padding-top: 80px;

  & > a {
    display: block;
    font-size: 2rem;
    margin-top: 70px;
    color: ${viewVariables.mainColor};
  }

  & > a:hover {
  }

  & > a:first-child {
    margin-top: 0;
  }
`;

export default StyledNav;
