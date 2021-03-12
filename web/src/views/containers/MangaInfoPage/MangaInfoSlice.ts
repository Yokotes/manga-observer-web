import { createSlice } from '@reduxjs/toolkit';

const MangaInfoSlice = createSlice({
  name: 'mangaInfo',
  initialState: {
    info: {
      _id: '',
      title: '',
      link: '',
      description: '',
      img: '',
      latestChapter: '',
      isInMangaList: '',
    },
  },
  reducers: {
    setCurrentMangaInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

export const { setCurrentMangaInfo } = MangaInfoSlice.actions;

export default MangaInfoSlice.reducer;
