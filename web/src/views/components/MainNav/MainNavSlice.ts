import { createSlice } from '@reduxjs/toolkit';

const MainNavSlice = createSlice({
  name: 'mainNav',
  initialState: {
    items: [
      {
        id: 0,
        path: '/user',
        classes: 'far fa-bell',
        title: '(0)',
        isCurrent: false,
      },
      {
        id: 1,
        path: '/catalog',
        classes: 'far fa-list-alt',
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
