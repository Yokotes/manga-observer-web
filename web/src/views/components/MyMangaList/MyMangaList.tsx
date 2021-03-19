import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMyMangaList } from './MyMangaList.styles';
import axios from 'axios';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { useEffect } from 'react';
import MyMangaListItem from './MyMangaListItem';
import { dropManga, addManga } from '../ProfileLink/ProfileSlice';
import { showErrorPopup } from '../../controllers/PopupController';
import { removeMangaFromUser } from '../../controllers/MangaController';

const MyMangaList = () => {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    dispatch(removeMangaFromUser(id));
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
            const mangaData = {
              _id: manga._id,
              title: manga.title,
              link: manga.link,
              description: manga.description,
              img: manga.img,
              latestChapter: manga.latestChapter,
              isInMangaList: true,
            };

            dispatch(addManga(mangaData));
          });
        })
        .catch((error) => {
          const res = error.response;
          dispatch(showErrorPopup(res.data.message));
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
          drop={() => handleClick(manga._id)}
        />
      ))}
    </StyledMyMangaList>
  );
};

export default MyMangaList;
