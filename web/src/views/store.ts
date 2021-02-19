import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MainNavSlice from './components/MainNav/MainNavSlice';
import ProfileSlice from './components/ProfileLink/ProfileSlice';
import ModalsReducers from './modals/ModalsReducers';

const rootReducers = combineReducers({
  mainNav: MainNavSlice,
  profile: ProfileSlice,
  modals: ModalsReducers,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof rootReducers>;
export default store;
