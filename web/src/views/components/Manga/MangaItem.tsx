import * as React from 'react';
import { StyledMangaItem } from './Manga.styles';
import { useHistory } from 'react-router-dom';
import MangaPanelBtn from './MangaPanelBtn';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentMangaInfo } from '../../containers/MangaInfoPage/MangaInfoSlice';
import { RootState } from '../../store';
import {
  addMangaToList,
  removeFromList,
} from '../../controllers/MangaController';

type MangaItemProps = {
  _id: string;
  title: string;
  link: string;
  img: string;
  description?: string;
  latestChapter: string;
  isInMangaList?: boolean;
};

type StyledMangaProps = {
  img: string;
};

const MangaItem = ({
  _id,
  title,
  link,
  img,
  description,
  latestChapter,
  isInMangaList = false,
}: MangaItemProps) => {
  const history = useHistory();
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  return (
    <StyledMangaItem img={img}>
      <div className="manga__content">
        <h2 className="manga__title">{title}</h2>
        <a href={link} target="_blank" className="manga__link">
          {latestChapter ? latestChapter : 'Latest chapter'}
        </a>
      </div>
      <div className="manga__panel">
        <MangaPanelBtn
          title={isInMangaList ? 'Remove from list' : 'Add manga to your list'}
          onClick={() =>
            isInMangaList
              ? removeFromList(_id, profile, dispatch)
              : addMangaToList(_id, profile, dispatch)
          }
        >
          {isInMangaList ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-plus"></i>
          )}
        </MangaPanelBtn>
        <MangaPanelBtn
          title="Show manga info"
          onClick={() => {
            dispatch(
              setCurrentMangaInfo({
                _id: _id,
                title: title,
                link: link,
                img: img,
                description: description,
                latestChapter: latestChapter,
                isInMangaList: isInMangaList,
              }),
            );

            history.push('/manga');
          }}
        >
          <i className="fas fa-info"></i>
        </MangaPanelBtn>
      </div>
    </StyledMangaItem>
  );
};

export { StyledMangaProps };

export default MangaItem;
