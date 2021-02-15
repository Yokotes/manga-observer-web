import viewVariables from 'src/views/variables';
import styled from 'styled-components';

const StyledNav = styled.nav`
  flex-grow: 1;
  padding-top: 30px;

  .menu {
    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      margin-top: 40px;
      color: ${viewVariables.menuColor};

      &:first-child {
        margin-top: 0;
      }

      & > i {
        font-size: 1.8rem;
      }

      & > span {
        display: block;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0.65;
        text-transform: uppercase;
        margin-top: 10px;
      }
    }
  }
`;

export default StyledNav;
