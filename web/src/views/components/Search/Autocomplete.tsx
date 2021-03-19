import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showErrorPopup } from '../../controllers/PopupController';
import { RootState } from '../../store';
import AutocompleteItem from './AutocompleteItem';
import { StyledAutocomplete } from './Search.styles';
import { addItem, clearMangaArray, setTimerId, setValue } from './SearchSlice';
import { setCurrentMangaInfo } from '../../containers/MangaInfoPage/MangaInfoSlice';
import { useHistory } from 'react-router-dom';

type AutocompleteProps = {
  search: string;
};

const Autocomplete = ({ search }: AutocompleteProps) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const mangaList = useSelector((state: RootState) => state.search.mangaArray);

  const handleClick = (manga) => {
    dispatch(setCurrentMangaInfo(manga));
    dispatch(clearMangaArray());
    dispatch(setValue(''));
    history.push('/manga');
  };

  //
  // @Description: Fetch manga array from the server.
  //  Form search regexp and search through manga array.
  //  If founded manga not in state array then push it.
  //
  const loadResult = () => {
    if (search.length > 2) {
      axios
        .get('/api/v1/mangas')
        .then((res) => {
          const result = res.data;
          const test = new RegExp(search, 'i');
          result.forEach((manga) => {
            const mangaObj = {
              _id: manga._id,
              title: manga.title,
              link: manga.link,
              img: manga.img,
              description: manga.description,
              latestChapter: manga.latestChapter,
              isInMangaList: manga.isInMangaList,
            };
            const filter = mangaList.filter(
              (manga) => manga._id == mangaObj._id,
            );
            if (filter.length == 0 && test.test(manga.title)) {
              dispatch(addItem(mangaObj));
            }
          });
        })
        .catch((err) => {
          dispatch(showErrorPopup(err.request.message));
        });
    } else {
      dispatch(clearMangaArray());
    }
    dispatch(setTimerId(null));
  };

  useEffect(() => {
    const timer = setTimeout(loadResult, 500);
    dispatch(setTimerId(timer));
  }, [search]);

  return search.length > 2 ? (
    <StyledAutocomplete>
      {mangaList.length > 0
        ? mangaList.map((manga) => (
            <AutocompleteItem
              key={manga._id}
              title={manga.title}
              img={manga.img}
              onClick={() => handleClick(manga)}
            />
          ))
        : 'No manga found'}
    </StyledAutocomplete>
  ) : null;
};

export default Autocomplete;
