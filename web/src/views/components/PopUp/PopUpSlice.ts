import { createSlice } from '@reduxjs/toolkit';

const PopUpSlice = createSlice({
  name: 'popUp',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: state.messages.length + 1,
        message: action.payload.message,
        type: action.payload.type,
      };

      state.messages.push(message);
    },
    dropMessage: (state, action) => {
      state.messages = state.messages.filter(
        (msg) => msg.id !== action.payload,
      );
    },
  },
});

export const { addMessage, dropMessage } = PopUpSlice.actions;

export default PopUpSlice.reducer;
