import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  downHeaderState: false,
  bellState: false,
  userState: false,
  burgerState: false,
  messageCountState: 2,
};

export const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    showBell: (state, action) => {
      state.downHeaderState = action.payload;
    },
    showDownHeader: (state, action) => {
      state.bellState = action.payload;
    },
    showUser: (state, action) => {
      state.userState = action.payload;
    },
    messageCountRemuve: (state) => {
      state.messageCountState = 0;
    },
    burgerShow: (state, action) => {
      state.burgerState = action.payload;
    },
  },
});
export const selectBellState = (state) => state.header.downHeaderState;
export const selectDownHeaderState = (state) => state.header.bellState;
export const selectUserState = (state) => state.header.userState;
export const selectBurgerState = (state) => state.header.burgerState;
export const selectMessageCountState = (state) =>
  state.header.messageCountState;

export const {
  showBell,
  showDownHeader,
  showUser,
  messageCountRemuve,
  burgerShow,
} = headerSlice.actions;

export default headerSlice.reducer;
