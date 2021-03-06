import styled from 'styled-components';

const StyledMangaInfo = styled.div`
  display: flex;
  justify-content: center;

  & .manga-info {
    display: flex;
    max-width: 1400px;

    &__img {
      max-width: 300px;
      margin-right: 20px;
    }

    &__title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      margin: 0;
      margin-bottom: 40px;
    }

    &__btns {
      margin-bottom: 50px;
    }

    &__description {
      font-family: 'Roboto', sans-serif;
      font-size: 1.1rem;
      line-height: 1.5;
    }

    &__link {
      margin-left: 15px;
      font-size: 1.1rem;
    }
  }
`;

export { StyledMangaInfo };
