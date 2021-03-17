import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import MainNavSlice from './components/MainNav/MainNavSlice';
import PopUpSlice from './components/PopUp/PopUpSlice';
import ProfileSlice from './components/ProfileLink/ProfileSlice';
import SearchSlice from './components/Search/SearchSlice';
import CatalogSlice from './containers/CatalogPage/CatalogSlice';
import MangaInfoSlice from './containers/MangaInfoPage/MangaInfoSlice';
import ProfileFormSlice from './containers/ProfilePage/ProfileFormSlice';
import ModalsReducers from './modals/ModalsReducers';
import thunk from 'redux-thunk';

export const rootReducers = combineReducers({
  mainNav: MainNavSlice,
  profile: ProfileSlice,
  modals: ModalsReducers,
  popUp: PopUpSlice,
  profileForm: ProfileFormSlice,
  search: SearchSlice,
  catalog: CatalogSlice,
  mangaInfo: MangaInfoSlice,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducers>;
