import * as React from 'react';
import { StyledMangaPanelBtn } from './Manga.styles';

type MangaPanelBtnProps = {
  children: React.ReactChild;
  onClick?();
  title?: string;
};

const MangaPanelBtn = ({ children, onClick, title }: MangaPanelBtnProps) => {
  return (
    <StyledMangaPanelBtn title={title} onClick={onClick}>
      {children}
    </StyledMangaPanelBtn>
  );
};

export default MangaPanelBtn;
