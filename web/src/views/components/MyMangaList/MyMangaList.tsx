import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMyMangaList } from './MyMangaList.styles';
import axios from 'axios';
import { addManga, dropManga } from '../../components/Manga/MangaSlice';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { useEffect } from 'react';
import MyMangaListItem from './MyMangaListItem';
import { dropUserManga } from '../ProfileLink/ProfileSlice';

const MyMangaList = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const mangaList = useSelector((state: RootState) => state.manga.manga);
  const dispatch = useDispatch();

  const removeManga = async (id: string) => {
    await axios.delete(`/api/v1/mangas/${id}/users/${profile._id}`);
    const userRes = await axios.delete(
      `/api/v1/users/${profile._id}/manga/${id}`,
      {
        headers: {
          Authorization: `Bearer ${profile.authToken}`,
        },
      },
    );

    return userRes.data;
  };

  //
  // @Description: Fetch manga list by ids and write it to the state
  //
  const fillManga = async () => {
    const mangaArray = await axios.post('/api/v1/mangas', profile.mangaList);

    return mangaArray.data;
  };

  //
  // @Change: After deleting item from user's manga list and global manga list
  //  Item still exist in the state. Fix it.
  //  Think about merging global manga list and user's manga list
  //
  useEffect(() => {
    console.log(mangaList);
    if (mangaList.length === 0 && profile.mangaList.length !== 0) {
      console.log(profile.mangaList);
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
  }, [profile.mangaList]);

  return (
    <StyledMyMangaList>
      {mangaList.map((manga) => (
        <MyMangaListItem
          key={manga._id}
          title={manga.title}
          link={manga.link}
          drop={() => {
            removeManga(manga._id)
              .then((res) => {
                dispatch(
                  addMessage({
                    message: res,
                    type: 'message',
                  }),
                );
                dispatch(dropUserManga(manga._id));
                dispatch(dropManga(manga._id));
                // console.log(mangaList);
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
          }}
          img={manga.img}
        />
      ))}
    </StyledMyMangaList>
  );
};

export default MyMangaList;
