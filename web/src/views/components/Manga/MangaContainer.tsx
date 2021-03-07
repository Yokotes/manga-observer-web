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
  const userMangaList = useSelector(
    (state: RootState) => state.profile.mangaList,
  );
  const dispatch = useDispatch();
  console.log('lol');

  const fillManga = async () => {
    const mangaArray = await axios.post('/api/v1/mangas', userMangaList);

    return mangaArray.data;
  };

  //
  // @Description: Send GET request to the server.
  //   After receiving response with manga array
  //   write it to the state if current user manga list contains
  //   manga id. If manga array is empty then throw an error
  //
  useEffect(() => {
    if (mangaList.length === 0 && userMangaList.length !== 0) {
      console.log('kek', userMangaList);
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
  }, [userMangaList]);

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
