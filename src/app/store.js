import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../features/headerSlice";
import loginSlice from "../features/loginSlice";
import dashboardSlice from "../features/dashboardSlice";
import blogSlice from "../features/blogSlice";
import userSlice from "../features/userSlice";
import ProductSlice from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
    login: loginSlice,
    user: userSlice,
    dashboard: dashboardSlice,
    blog: blogSlice,
    product: ProductSlice,
  },
});
