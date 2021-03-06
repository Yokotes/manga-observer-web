import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMangaContainer } from './Manga.styles';
import MangaItem from './MangaItem';
import axios from 'axios';
import { useEffect } from 'react';
import { addManga } from './MangaSlice';
import { addMessage } from '../PopUp/PopUpSlice';

const MangaContainer = () => {
  const mangaList = useSelector((state: RootState) => state.manga.manga);
  const user = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const fillManga = async () => {
    const manga = await axios.get('/api/v1/mangas');
    const userMangaList = user.mangaList;

    return manga.data.filter((manga) => userMangaList.includes(manga._id));
  };

  //
  // @Description: Send GET request to the server.
  //   After receiving response with manga array
  //   write it to the state if current user manga list contains
  //   manga id. If manga array is empty then throw an error
  //
  useEffect(() => {
    if (user.mangaList) {
      fillManga()
        .then((res) => {
          res.forEach((manga) => {
            dispatch(
              addManga({
                _id: manga._id,
                title: manga.title,
                link: manga.link,
                img: manga.img,
                latestChapter: manga.latestChapter,
              }),
            );
          });
        })
        .catch((error) => {
          const res = error.response;
          dispatch(
            addMessage({
              message: 'Error: ' + res.data.message,
              type: 'error',
            }),
          );
        });
    }
  }, [user.mangaList]);

  return (
    <StyledMangaContainer>
      {mangaList.length > 0 ? (
        mangaList.map((manga) => (
          <MangaItem
            key={manga._id}
            title={manga.title}
            link={manga.link}
            img={manga.img}
            latestChapter={manga.latestChapter}
          />
        ))
      ) : (
        <div className="no-manga">There is no manga in your list yet</div>
      )}
    </StyledMangaContainer>
  );
};

export default MangaContainer;
