import viewVariables from '../../variables';
import styled from 'styled-components';
import { StyledMangaProps } from './MangaItem';

const StyledMangaContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  & > .no-manga {
    font-family: 'Roboto', sans-serif;
  }
`;

const StyledMangaItem = styled.div`
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.4) 26.56%,
      #000000 100%
    ),
    url('${(props: StyledMangaProps) =>
      props.img ? props.img : '/no_img.png'}');
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  max-width: 350px;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);

  & .manga {
    &__content {
      z-index: 1;
      // position: relative;
      padding: 0 10px;
      padding-bottom: 20px;
    }

    &__title {
      color: ${viewVariables.menuColor};
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
    }

    &__link {
      color: ${viewVariables.menuColor};
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 500px;
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      background-color: ${viewVariables.mainColor};
      padding: 10px;
      margin: 0;
    }
  }

  &::before {
    display: block;
    content: '';
    background-color: #000;
    opacity: 0.2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

export { StyledMangaContainer, StyledMangaItem };
