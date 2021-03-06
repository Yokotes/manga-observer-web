import viewVariables from '../../variables';
import styled from 'styled-components';

const StyledMyMangaList = styled.div``;

const StyledMyMangaListItem = styled.div`
  border: 1px solid #00000033;
  background-color: #ffffffaa;
  border-radius: 20px;
  height: 80px;
  padding: 15px 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    margin-bottom: 0px;
  }

  & .manga-item {
    &__content {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__img {
      height: 100%;
      margin-right: 20px;
    }

    &__title {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      fons-size: 1.1rem;

      & > a {
        text-decoration: none;
        color: #000;
      }
    }

    &__btns {
      padding-right: 15px;
    }

    &__remove-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: ${viewVariables.mainColor};
      font-size: 1.3rem;
      transition: text-shadow 0.5s;

      &:hover {
        text-shadow: 0 0 3px ${viewVariables.mainColor};
      }
    }
  }
`;

export { StyledMyMangaList, StyledMyMangaListItem };
