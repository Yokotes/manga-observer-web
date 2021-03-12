import axios from 'axios';
import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaContainer from '../../components/Manga/MangaContainer';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { addManga } from '../../components/ProfileLink/ProfileSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.profile);

  //
  // @Description: Send POST request with the user's manga list to the server.
  //   After receiving response with manga array
  //   write it to the state. If manga array is empty then throw an error
  //
  const fillManga = () => {
    if (profile.mangaList.length === 0 && profile.mangaToUpload.length !== 0) {
      axios
        .post('/api/v1/mangas', profile.mangaToUpload)
        .then((res) => {
          res.data.forEach((manga) => {
            dispatch(
              addManga({
                _id: manga._id,
                title: manga.title,
                link: manga.link,
                img: manga.img,
                description: manga.description,
                latestChapter: manga.latestChapter,
                isInMangaList: true,
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
  };

  return (
    <MangaContainer
      fillManga={fillManga}
      effectVar={profile.mangaToUpload}
      mangaList={profile.mangaList}
    />
  );
};

export default HomePage;
