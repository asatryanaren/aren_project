import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/User/People_Data";

const initialState = { userState: data };
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
      if (action.payload === "") {
        state.userState = data;
      }
      state.userState = state.userState.filter((blog) =>
        blog.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    addUser: (state, action) => {
      state.userState = [
        {
          id: Math.random(),
          name: action.payload,
          imgSrc: "./images/avatar.jpg",
          role: "Leader",
          verified: "Yes",
          status: "Active",
          company: "Ritchie, Haley and Botsford",
          completed: false,
        },
        ...state.userState,
      ];
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
} = userSlice.actions;
export const selectUserState = (state) => state.user.userState;
export default userSlice.reducer;
