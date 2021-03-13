import { createSlice } from '@reduxjs/toolkit';

const CatalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    mangaList: [],
  },
  reducers: {
    addToCatalog: (state, action) => {
      state.mangaList.push(action.payload);
    },
    dropFromCatalog: (state, action) => {
      state.mangaList = state.mangaList.filter(
        (manga) => manga._id !== action.payload,
      );
    },
    toggleIsInList: (state, action) => {
      const selectedManga = state.mangaList.filter(function (manga) {
        return manga._id === action.payload;
      });

      if (selectedManga.length > 0) {
        const index = state.mangaList.indexOf(selectedManga);
        selectedManga[0].isInMangaList = !selectedManga[0].isInMangaList;
        state.mangaList[index] = selectedManga[0];
      }
    },
    clearCatalog: (state) => {
      state.mangaList = [];
    },
  },
});

export const {
  addToCatalog,
  dropFromCatalog,
  clearCatalog,
  toggleIsInList,
} = CatalogSlice.actions;

export default CatalogSlice.reducer;
