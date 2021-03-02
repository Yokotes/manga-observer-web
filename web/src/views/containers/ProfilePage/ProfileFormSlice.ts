import { createSlice } from '@reduxjs/toolkit';

const ProfileFormSlice = createSlice({
  name: 'profileForm',
  initialState: {
    username: '',
    password: '',
    submitPassword: '',
    formImg: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setSubmitPassword: (state, action) => {
      state.submitPassword = action.payload;
    },

    setFormImg: (state, action) => {
      state.formImg = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setSubmitPassword,
  setFormImg,
} = ProfileFormSlice.actions;

export default ProfileFormSlice.reducer;
