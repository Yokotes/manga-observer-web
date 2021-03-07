import { createSlice } from '@reduxjs/toolkit';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    authToken: '',
    name: '',
    _id: '',
    img: '',
    mangaList: [],
  },
  reducers: {
    setToken: (state, action) => {
      state.authToken = action.payload;

      window.localStorage.setItem('access_token', action.payload);
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setId: (state, action) => {
      state._id = action.payload;
    },
    setImg: (state, action) => {
      state.img = action.payload;
    },
    setMangaList: (state, action) => {
      state.mangaList = action.payload;
    },
    dropUserManga: (state, action) => {
      state.mangaList = state.mangaList.filter((manga) => manga !== action);
    },
    signOut: (state) => {
      state.name = '';
      state.img = '';
      state._id = '';
      state.authToken = '';

      window.localStorage.removeItem('access_token');
    },
    getTokenFromStorage: (state) => {
      state.authToken = window.localStorage.getItem('access_token');
    },
  },
});

export const {
  setToken,
  getTokenFromStorage,
  setName,
  setId,
  setImg,
  setMangaList,
  dropUserManga,
  signOut,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
