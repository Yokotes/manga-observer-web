import { RootState } from '../../store';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyledMangaInfo } from './MangaInfoPage.styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import LinkButton from '../../components/LinkButton/LinkButton';

const MangaInfoPage = () => {
  const mangaInfo = useSelector((state: RootState) => state.mangaInfo.info);

  return mangaInfo._id ? (
    <StyledMangaInfo>
      <img src={mangaInfo.img} alt="Manga Image" className="manga-info__img" />
      <div className="manga-info__content">
        <h1 className="manga-info__title">{mangaInfo.title}</h1>
        <div className="manga-info__btns">
          {mangaInfo.isInMangaList ? (
            'Manga already in your list'
          ) : (
            <PrimaryButton className="manga-info__add-btn">
              Add to list
            </PrimaryButton>
          )}
          <LinkButton
            className="manga-info__link"
            onClick={() => {
              window.location.href = mangaInfo.link;
            }}
          >
            Read manga
          </LinkButton>
        </div>
        <p className="manga-info__description">{mangaInfo.description}</p>
      </div>
    </StyledMangaInfo>
  ) : (
    <>Oops... Something went wrong</>
  );
};

export default MangaInfoPage;
