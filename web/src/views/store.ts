import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MainNavSlice from './components/MainNav/MainNavSlice';
import PopUpSlice from './components/PopUp/PopUpSlice';
import ProfileSlice from './components/ProfileLink/ProfileSlice';
import ModalsReducers from './modals/ModalsReducers';

export const rootReducers = combineReducers({
  mainNav: MainNavSlice,
  profile: ProfileSlice,
  modals: ModalsReducers,
  popUp: PopUpSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
export default store;
