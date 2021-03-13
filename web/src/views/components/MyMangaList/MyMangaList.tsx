import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMyMangaList } from './MyMangaList.styles';
import axios from 'axios';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { useEffect } from 'react';
import MyMangaListItem from './MyMangaListItem';
import { dropManga, addManga } from '../ProfileLink/ProfileSlice';

const MyMangaList = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const removeFromList = async (id: string) => {
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
  // @Description: Fetch user's manga list from database
  //
  const fillManga = async () => {
    const mangaArray = await axios.post(
      '/api/v1/mangas',
      profile.mangaToUpload,
    );

    return mangaArray.data;
  };

  //
  // @Description: Write user's manga list to the state
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
                description: manga.description,
                img: manga.img,
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
  }, [profile.mangaToUpload]);

  return (
    <StyledMyMangaList>
      {profile.mangaList.map((manga) => (
        <MyMangaListItem
          key={manga._id}
          title={manga.title}
          link={manga.link}
          img={manga.img}
          drop={() => {
            removeFromList(manga._id)
              .then((res) => {
                dispatch(
                  addMessage({
                    message: res,
                    type: 'message',
                  }),
                );
                dispatch(dropManga(manga._id));
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
        />
      ))}
    </StyledMyMangaList>
  );
};

export default MyMangaList;
