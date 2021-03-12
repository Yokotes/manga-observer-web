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
    clearCatalog: (state) => {
      state.mangaList = [];
    },
  },
});

export const {
  addToCatalog,
  dropFromCatalog,
  clearCatalog,
} = CatalogSlice.actions;

export default CatalogSlice.reducer;
