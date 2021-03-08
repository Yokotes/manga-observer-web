import { createSlice } from '@reduxjs/toolkit';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    authToken: '',
    name: '',
    _id: '',
    img: '',
    mangaList: [],
    mangaToUpload: [],
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
    setMangaToUpload: (state, action) => {
      state.mangaToUpload = action.payload;
    },
    addManga: (state, action) => {
      state.mangaList.push(action.payload);
      state.mangaToUpload = state.mangaToUpload.filter(
        (id) => id !== action.payload._id,
      );
    },
    dropManga: (state, action) => {
      state.mangaList = state.mangaList.filter(
        (manga) => manga._id !== action.payload,
      );
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
  setMangaToUpload,
  dropManga,
  addManga,
  signOut,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;
