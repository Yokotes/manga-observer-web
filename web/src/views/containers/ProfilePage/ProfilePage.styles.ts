import styled from 'styled-components';

const StyledProfilePage = styled.div`
  max-width: 1100px;

  & .form__content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  & .profile {
    &__h1,
    &__h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
    }

    &__h1 {
      margin-bottom: 60px;
    }

    &__h2 {
      margin-bottom: 40px;
    }

    &__block {
      margin-right: 20px;
      margin-top: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__input {
      margin-top: 20px;
    }

    &__submit-btn {
      display: block;
      margin: 0 auto;
      margin-top: 50px;
    }
  }
`;

export default StyledProfilePage;
