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
  height: 250px;
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

  &:hover {
    & .manga__panel {
      bottom: 0;
    }
  }

  & .manga {
    &__content {
      z-index: 1;
      padding: 0 10px;
      padding-bottom: 70px;
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

    &__panel {
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: -50;
      left: 0;
      display: flex;
      background-color: ${viewVariables.secondColor};
      z-index: 5;
      transition: bottom 0.5s;
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

const StyledMangaPanelBtn = styled.button`
  width: 50px;
  background: none;
  border: none;
  border-right: 1px solid #ffffff44;
  color: ${viewVariables.menuColor};
  cursor: pointer;
  opacity: 0.5;
  transition: background 0.5s, opacity 0.5s;

  &:hover {
    background-color: ${viewVariables.mainColor};
    opacity: 1;
  }

  &:first-child {
    border-left: none;
  }

  &:focus {
    outline: none;
  }
`;

export { StyledMangaContainer, StyledMangaItem, StyledMangaPanelBtn };
