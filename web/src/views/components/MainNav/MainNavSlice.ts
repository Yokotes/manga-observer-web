import { createSlice } from '@reduxjs/toolkit';

const MainNavSlice = createSlice({
  name: 'mainNav',
  initialState: {
    items: [
      {
        id: 0,
        path: '/manga',
        classes: 'fas fa-book',
        title: 'Manga',
        isCurrent: false,
      },
    ],
  },
  reducers: {
    setCurrent: (state, action) => {
      state.items[action.payload].isCurrent = true;
    },
  },
});

export const { setCurrent } = MainNavSlice.actions;

export default MainNavSlice.reducer;
