// import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledProfileLink = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid #00000033;
  padding-left: 30px;

  & > a {
    display: block;
    margin-right: 15px;
  }

  & .profile-link__img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  & .profile-link__name {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 2px;
  }

  & .profile-link__btn {
    font-size: 0.8rem;
    padding: 0;
  }
`;

const StyledSignUpLink = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export { StyledProfileLink, StyledSignUpLink };
