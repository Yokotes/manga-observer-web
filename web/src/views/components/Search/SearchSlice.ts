import { createSlice } from '@reduxjs/toolkit';

const SearchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    mangaArray: [],
    timerId: null,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    addItem: (state, action) => {
      state.mangaArray.push(action.payload);
    },
    cleanMangaArray: (state) => {
      state.mangaArray = [];
    },
    setTimerId: (state, action) => {
      clearTimeout(state.timerId);
      state.timerId = action.payload;
    },
  },
});

export const {
  setValue,
  addItem,
  cleanMangaArray,
  setTimerId,
} = SearchSlice.actions;

export default SearchSlice.reducer;
