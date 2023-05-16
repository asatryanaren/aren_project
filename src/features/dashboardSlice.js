import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/Product/Product_Data";
const initialState = { chartBarState: data };
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});
export const selectChartBarState = (state) => state.dashboard.chartBarState;
export default dashboardSlice.reducer;
