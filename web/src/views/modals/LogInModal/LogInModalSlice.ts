import { createSlice } from '@reduxjs/toolkit';

const LogInModalSlice = createSlice({
  name: 'logInModal',
  initialState: {
    name: '',
    password: '',
    isShow: false,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    showLogIn: (state) => {
      state.isShow = true;
    },
    hideLogIn: (state) => {
      state.isShow = false;
    },
  },
});

export const {
  setName,
  setPassword,
  showLogIn,
  hideLogIn,
} = LogInModalSlice.actions;

export default LogInModalSlice.reducer;
