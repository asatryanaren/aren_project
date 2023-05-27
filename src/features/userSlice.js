import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/User/People_Data";

const initialState = {
  userState: data,
  userNewState: data,
  showPopupState: false,
  statusBlockState: false,
  idStatus: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.userState = state.userState.filter(
        (user) => user.id !== action.payload
      );
    },
    searchUser: (state, action) => {
      if (action.payload.length >= 0) state.userState = state.userNewState;
      state.userState = state.userNewState.filter((u) =>
        u.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addUser: (state, action) => {
      if (
        action.payload.name &&
        action.payload.role &&
        action.payload.company
      ) {
        state.userState = [
          {
            id: Math.random(),
            name: action.payload.name,
            imgSrc: "./images/avatar.jpg",
            role: action.payload.role,
            verified: action.payload.verified,
            status: "Active",
            company: action.payload.company,
            completed: false,
          },
          ...state.userState,
        ];
      }
      state.userNewState = state.userState;
      state.userState = state.userState;
    },
    showPopupUser: (state, action) => {
      state.showPopupState = action.payload;
    },
    statusBlock: (state, action) => {
      state.statusBlockState = action.payload;
    },
    status: (state, action) => {
      state.idStatus = action.payload;
      state.userState = state.userState.filter((u) =>
        u.id === action.payload ? (state.statusBlockState = true) : u
      );
    },
    statusEdit: (state, action) => {
      state.userState = state.userState.filter((u) =>
        u.id === state.idStatus
          ? (u.status = action.payload)
          : (u.status = u.status)
      );
    },
    userCompleted: (state, action) => {
      const completed = state.userState.find(
        (user) => user.id === action.payload
      );
      completed.completed = !completed.completed;
    },
    userDeleteAllCompleted: (state) => {
      state.userState = state.userState.filter(
        (users) => users.completed !== true
      );
    },
    userAllChecks: (state) => {
      state.userState = state.userState.filter((u) => {
        u.completed = true;
        return u.completed === true;
      });
    },
    userAllInchecks: (state) => {
      state.userState = state.userState.filter((u) => {
        u.completed = false;
        return u.completed === false;
      });
    },
  },
});
export const {
  deleteUser,
  searchUser,
  addUser,
  userCompleted,
  userDeleteAllCompleted,
  userAllChecks,
  userAllInchecks,
  showPopupUser,
  statusBlock,
  status,
  statusEdit,
} = userSlice.actions;
export const selectUserState = (state) => state.user.userState;
export const selectshowPopupState = (state) => state.user.showPopupState;
export const selectStatusBlockState = (state) => state.user.statusBlockState;
export const selectIdState = (state) => state.user.idStatus;
export default userSlice.reducer;
