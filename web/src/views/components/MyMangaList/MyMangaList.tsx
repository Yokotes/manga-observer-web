import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMyMangaList } from './MyMangaList.styles';
import axios from 'axios';
import { addManga } from '../../components/Manga/MangaSlice';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { useEffect } from 'react';
import MyMangaListItem from './MyMangaListItem';
import { dropManga } from '../ProfileLink/ProfileSlice';

const MyMangaList = () => {
  const userMangaList = useSelector(
    (state: RootState) => state.profile.mangaList,
  );
  const mangaList = useSelector((state: RootState) => state.manga.manga);
  const dispatch = useDispatch();

  //
  // @Description: Fetch manga list from database
  //  and filter it by user's manga list
  //
  const fillManga = async () => {
    const manga = await axios.get('/api/v1/mangas');

    return manga.data.filter((manga) => userMangaList.includes(manga._id));
  };

  useEffect(() => {
    if (mangaList.length === 0) {
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
    <StyledMyMangaList>
      {mangaList.map((manga) => (
        <MyMangaListItem
          key={manga._id}
          title={manga.title}
          link={manga.link}
          drop={() => {
            // dispatch(dropManga(manga._id));
            console.log(manga._id);
          }}
          img={manga.img}
        />
      ))}
    </StyledMyMangaList>
  );
};

export default MyMangaList;
