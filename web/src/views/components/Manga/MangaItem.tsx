import * as React from 'react';
import { StyledMangaItem } from './Manga.styles';

type MangaItemProps = {
  title: string;
  link: string;
  img: string;
  latestChapter: string;
};

type StyledMangaProps = {
  img: string;
};

const MangaItem = ({ title, link, img, latestChapter }: MangaItemProps) => {
  return (
    <StyledMangaItem img={img}>
      <div className="manga__content">
        <h2 className="manga__title">{title}</h2>
        <a href={link} target="_blank" className="manga__link">
          {latestChapter ? latestChapter : 'Latest chapter'}
        </a>
      </div>
    </StyledMangaItem>
  );
};

export { StyledMangaProps };

export default MangaItem;
