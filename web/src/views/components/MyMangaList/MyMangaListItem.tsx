import * as React from 'react';
import { StyledMyMangaListItem } from './MyMangaList.styles';

type MyMangaListItemProps = {
  title: string;
  link: string;
  img: string;
  drop();
};

const MyMangaListItem = ({ title, link, img, drop }: MyMangaListItemProps) => {
  return (
    <StyledMyMangaListItem>
      <div className="manga-item__content">
        <img src={img} alt={title} className="manga-item__img" />
        <h3 className="manga-item__title" title={title}>
          <a href={link} target="_blank">
            {title}
          </a>
        </h3>
      </div>
      <div className="manga-item__btns">
        <button
          className="manga-item__remove-btn"
          title="Remove manga from my list"
          onClick={drop}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </StyledMyMangaListItem>
  );
};

export default MyMangaListItem;
