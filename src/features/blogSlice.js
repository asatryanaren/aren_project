import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/Blog/Blog_Data";
const initialState = data;

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    filterBlog(state, action) {
      if (action.payload === "") {
        return data;
      }
      return state.filter((blog) =>
        blog.text.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const selectBlogState = (state) => state.blog;
export const { filterBlog } = blogSlice.actions;
export default blogSlice.reducer;
