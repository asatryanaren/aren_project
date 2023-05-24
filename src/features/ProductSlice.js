import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/Product/Product_Data";

const initialState = {
  data,
  globalGender: data,
  globalCategory: data,
  globalColor: data,
  menState: false,
  womenState: false,
  kidsState: false,
  filterState: false,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    gender: (state, action) => {
      state.data = state.globalGender.filter(
        (g) => g.gender === action.payload
      );
    },
    genderInitialState: (state) => {
      state.data = data;
    },
    men: (state, action) => {
      state.menState = action.payload;
    },
    women: (state, action) => {
      state.womenState = action.payload;
    },
    kids: (state, action) => {
      state.kidsState = action.payload;
    },
    category: (state, action) => {
      switch (action.payload) {
        case "all":
          state.data = state.globalCategory;
          break;
        case "shose":
          state.data = state.globalCategory.filter(
            (shose) => shose.category === "shose"
          );
          break;
        case "apparel":
          state.data = state.globalCategory.filter(
            (apparel) => apparel.category === "apparel"
          );
          break;
        case "accessories":
          state.data = state.globalCategory.filter(
            (accessories) => accessories.category === "accessories"
          );
          break;
      }
    },
    color: (state, action) => {
      switch (action.payload) {
        case "green":
          state.data = state.globalColor.filter((c) => c.color === "green");
          break;
        case "blue":
          state.data = state.globalColor.filter((c) => c.color === "blue");
          break;
        case "pink":
          state.data = state.globalColor.filter((c) => c.color === "pink");
          break;
        case "white":
          state.data = state.globalColor.filter((c) => c.color === "white");
          break;
        case "lightGreen":
          state.data = state.globalColor.filter(
            (c) => c.color === "lightGreen"
          );
          break;
        case "red":
          state.data = state.globalColor.filter((c) => c.color === "red");
          break;
        case "black":
          state.data = state.globalColor.filter((c) => c.color === "black");
          break;
        case "yellow":
          state.data = state.globalColor.filter((c) => c.color === "yellow");
          break;
      }
    },
    filter: (state, action) => {
      state.filterState = action.payload;
    },
  },
});
export const selectProductState = (state) => state.product.data;
export const selectMenState = (state) => state.product.menState;
export const selectWomenState = (state) => state.product.womenState;
export const selectKidsState = (state) => state.product.kidsState;
export const selectFilterState = (state) => state.product.filterState;
export const {
  gender,
  genderInitialState,
  men,
  women,
  kids,
  color,
  category,
  filter,
} = ProductSlice.actions;
export default ProductSlice.reducer;
