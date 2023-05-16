import { createSlice } from "@reduxjs/toolkit";
const initialState = { loginEye: false };

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginEye: (state, action) => {
      state.loginEye = action.payload;
    },
  },
});

export const selectloginEyeState = (state) => state.login.loginEye;

export const { loginEye } = loginSlice.actions;

export default loginSlice.reducer;
