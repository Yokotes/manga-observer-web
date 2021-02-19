import { createSlice } from '@reduxjs/toolkit';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    _id: '',
    name: '',
    img: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setImg: (state, action) => {
      state.img = action.payload;
    },

    setProfile: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setName, setImg, setProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
