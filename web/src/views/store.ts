import { combineReducers, configureStore } from '@reduxjs/toolkit';
import MainNavSlice from './components/MainNav/MainNavSlice';

const store = configureStore({
  reducer: {
    mainNav: MainNavSlice,
  },
});

const rootReducers = combineReducers({
  mainNav: MainNavSlice,
});

export type RootState = ReturnType<typeof rootReducers>;
export default store;
