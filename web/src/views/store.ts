import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MainNavSlice from './components/MainNav/MainNavSlice';
import PopUpSlice from './components/PopUp/PopUpSlice';
import ProfileSlice from './components/ProfileLink/ProfileSlice';
import SearchSlice from './components/Search/SearchSlice';
import ProfileFormSlice from './containers/ProfilePage/ProfileFormSlice';
import ModalsReducers from './modals/ModalsReducers';

export const rootReducers = combineReducers({
  mainNav: MainNavSlice,
  profile: ProfileSlice,
  modals: ModalsReducers,
  popUp: PopUpSlice,
  profileForm: ProfileFormSlice,
  search: SearchSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
export default store;
