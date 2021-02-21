import { createSlice } from '@reduxjs/toolkit';

const SignUpModalSlice = createSlice({
  name: 'signUpModal',
  initialState: {
    name: '',
    password: '',
    isShow: true,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    showSignUp: (state) => {
      state.isShow = true;
    },
    hideSignUp: (state) => {
      state.isShow = false;
    },
  },
});

export const {
  setName,
  setPassword,
  showSignUp,
  hideSignUp,
} = SignUpModalSlice.actions;

export default SignUpModalSlice.reducer;
