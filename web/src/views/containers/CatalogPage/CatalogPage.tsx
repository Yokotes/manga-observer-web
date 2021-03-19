import axios from 'axios';
import { RootState } from '../../store';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MangaContainer from '../../components/Manga/MangaContainer';
import { addToCatalog } from './CatalogSlice';
import { showErrorPopup } from '../../controllers/PopupController';

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
          const mangaData = {
            _id: manga._id,
            title: manga.title,
            link: manga.link,
            img: manga.img,
            description: manga.description,
            latestChapter: manga.latestChapter,
            isInMangaList: testMangaArray.includes(manga._id) ? true : false,
          };

          dispatch(addToCatalog(mangaData));
        });
      })
      .catch((error) => {
        const res = error.response;
        dispatch(showErrorPopup(res.data.message));
      });
  };

  return (
    <MangaContainer
      fillManga={fillManga}
      effectVar={[profile.authToken]}
      mangaList={catalog.mangaList}
    />
  );
};

export default CatalogPage;
