import { createSlice } from '@reduxjs/toolkit';

const MangaSlice = createSlice({
  name: 'mangaSlice',
  initialState: {
    manga: [],
  },
  reducers: {
    addManga: (state, action) => {
      state.manga.push(action.payload);
    },

    dropManga: (state, action) => {
      state.manga = state.manga.filter((manga) => manga._id !== action.payload);
    },
  },
});

export const { addManga, dropManga } = MangaSlice.actions;

export default MangaSlice.reducer;
