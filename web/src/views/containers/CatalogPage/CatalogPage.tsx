import axios from 'axios';
import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaContainer from '../../components/Manga/MangaContainer';
import { addMessage } from '../../components/PopUp/PopUpSlice';
import { addToCatalog } from './CatalogSlice';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector((state: RootState) => state.catalog);
  const profile = useSelector((state: RootState) => state.profile);

  //
  // @Description: Send GET request to the manga route.
  //   After receiving manga array push it in the state.
  //   Set 'isInMangaList' field to 'true' if manga contains in user manga list
  //
  const fillManga = () => {
    if (!profile.authToken || catalog.mangaList.length > 0) return;

    axios
      .get('/api/v1/mangas')
      .then((res) => {
        const testMangaArray =
          profile.mangaList.length > 0
            ? profile.mangaList.map((manga) => manga._id)
            : profile.mangaToUpload;

        res.data.forEach((manga) => {
          dispatch(
            addToCatalog({
              _id: manga._id,
              title: manga.title,
              link: manga.link,
              img: manga.img,
              description: manga.description,
              latestChapter: manga.latestChapter,
              isInMangaList: testMangaArray.includes(manga._id) ? true : false,
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
  };

  return (
    <MangaContainer
      fillManga={fillManga}
      effectVar={profile.mangaToUpload}
      mangaList={catalog.mangaList}
    />
  );
};

export default CatalogPage;
