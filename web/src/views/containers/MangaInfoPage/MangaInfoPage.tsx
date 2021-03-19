import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMangaInfo } from './MangaInfoPage.styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import LinkButton from '../../components/LinkButton/LinkButton';
import {
  addMangaToUser,
  removeMangaFromUser,
} from '../../controllers/MangaController';
import { useHistory } from 'react-router';

const MangaInfoPage = () => {
  const mangaInfo = useSelector((state: RootState) => state.mangaInfo.info);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    mangaInfo.isInMangaList
      ? dispatch(removeMangaFromUser(mangaInfo._id))
      : dispatch(addMangaToUser(mangaInfo._id));
    history.push('/');
  };

  return mangaInfo._id ? (
    <StyledMangaInfo>
      <div className="manga-info">
        <img
          src={mangaInfo.img}
          alt="Manga Image"
          className="manga-info__img"
        />
        <div className="manga-info__content">
          <h1 className="manga-info__title">{mangaInfo.title}</h1>
          <div className="manga-info__btns">
            <PrimaryButton
              className="manga-info__add-btn"
              onClick={handleClick}
            >
              {mangaInfo.isInMangaList ? 'Delete' : 'Add'}
            </PrimaryButton>
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
      </div>
    </StyledMangaInfo>
  ) : (
    <>Ooops... Something went wrong</>
  );
};

export default MangaInfoPage;
