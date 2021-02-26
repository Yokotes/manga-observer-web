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
    const userMangaList = await axios.get(`/api/v1/users/${user._id}/manga`, {
      headers: {
        Authorization: `Bearer ${user.authToken}`,
      },
    });

    return manga.data.filter((manga) =>
      userMangaList.data.data.includes(manga._id),
    );
  };

  //
  // @Description: Send GET request to the server.
  //   After receiving response with manga array
  //   write it to the state if current user manga list contains
  //   manga id. If manga array is empty then throw an error
  //
  useEffect(() => {
    if (user._id) {
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
          console.log(error);
          dispatch(
            addMessage({
              message: 'Error: ' + res.data.message,
              type: 'error',
            }),
          );
        });
    }
  }, [user._id]);

  return (
    <StyledMangaContainer>
      {mangaList.map((manga) => (
        <MangaItem
          key={manga._id}
          title={manga.title}
          link={manga.link}
          img={manga.img}
          latestChapter={manga.latestChapter}
        />
      ))}
    </StyledMangaContainer>
  );
};

export default MangaContainer;
