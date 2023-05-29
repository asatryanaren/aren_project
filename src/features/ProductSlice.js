import { data } from "../components/Pages/Product/Product_Data";
import { createSlice } from "@reduxjs/toolkit";
import { getFilteredData } from "../helpers";

const initialState = {
  items: data,
  filterGenderList: [],
  filterCategory: "all",
  filterColorsList: [],
  filterState: false,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setGender: (state, action) => {
      state.filterGenderList = state.filterGenderList.includes(action.payload)
        ? state.filterGenderList.filter((item) => item !== action.payload)
        : [...state.filterGenderList, action.payload];

      ProductSlice.caseReducers.getFilteredData(state, action);
    },
    setCategory: (state, action) => {
      state.filterCategory = action.payload;

      ProductSlice.caseReducers.getFilteredData(state, action);
    },
    setColors: (state, action) => {
      state.filterColorsList = state.filterColorsList.includes(action.payload)
        ? state.filterColorsList.filter((item) => item !== action.payload)
        : [...state.filterColorsList, action.payload];

      ProductSlice.caseReducers.getFilteredData(state, action);
    },
    clealAll: (state, action) => {
      state.filterCategory = "all";
      state.filterColorsList = [];
      state.filterGenderList = [];

      ProductSlice.caseReducers.getFilteredData(state, action);
    },
    getFilteredData: (state, action) => {
      const filterCategory = state.filterCategory;
      const filterColorsList = [...state.filterColorsList];
      const filterGenderList = [...state.filterGenderList];

      state.items = getFilteredData({
        data,
        filterCategory,
        filterColorsList,
        filterGenderList,
      });
    },
    filter: (state, action) => {
      state.filterState = action.payload;
    },
  },
});
export const selectProductState = (state) => state.product.items;
export const selectFilterState = (state) => state.product.filterState;
export const selectFilterGenders = (state) => state.product.filterGenderList;
export const selectFilterCategory = (state) => state.product.filterCategory;
export const selectFilterColorsList = (state) => state.product.filterColorsList;
export const {
  gender,
  genderInitialState,
  men,
  women,
  kids,
  color,
  category,
  filter,
  setGender,
  setCategory,
  setColors,
  clealAll,
} = ProductSlice.actions;
export default ProductSlice.reducer;
