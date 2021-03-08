import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMangaContainer } from './Manga.styles';
import MangaItem from './MangaItem';
import axios from 'axios';
import { useEffect } from 'react';
import { addMessage } from '../PopUp/PopUpSlice';
import { addManga } from '../ProfileLink/ProfileSlice';

const MangaContainer = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  //
  // @Description: Send POST request with the user's manga list to the server.
  //
  const fillManga = async () => {
    const mangaArray = await axios.post(
      '/api/v1/mangas',
      profile.mangaToUpload,
    );

    return mangaArray.data;
  };

  //
  // @Description: After receiving response with manga array
  //   write it to the state. If manga array is empty then throw an error
  //
  useEffect(() => {
    if (profile.mangaList.length === 0 && profile.mangaToUpload.length !== 0) {
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
  }, [profile.mangaToUpload]);

  return (
    <StyledMangaContainer>
      {profile.mangaList.length > 0 ? (
        profile.mangaList.map((manga) => (
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
