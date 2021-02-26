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
  const dispatch = useDispatch();

  const fillManga = async () => {
    return await axios.get('/api/v1/mangas');
  };

  //
  // @Description: Send GET request to the server.
  //   After receiving response with manga array
  //   write it to the state.
  //   If manga array is empty then throw an error
  //
  useEffect(() => {
    fillManga()
      .then((res) => {
        const array = res.data;
        array.forEach((manga) => {
          dispatch(
            addManga({
              _id: manga._id,
              title: manga.title,
              link: manga.link,
              description: manga.description,
              img: manga.img,
              latestChapter: manga.latestChapter,
              isShow: true,
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
  }, []);

  return (
    <StyledMangaContainer>
      {mangaList.map((manga) => (
        <MangaItem
          key={manga._id}
          _id={manga._id}
          title={manga.title}
          description={manga.description}
          link={manga.link}
          img={manga.img}
          latestChapter={manga.latestChapter}
          isShow={manga.isShow}
        />
      ))}
    </StyledMangaContainer>
  );
};

export default MangaContainer;
