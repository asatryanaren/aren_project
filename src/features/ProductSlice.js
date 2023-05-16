// import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../components/Pages/Product/Product_Data";

// const initialState = {
//   globalData: data,
//   data: data,
//   menState: false,
//   womenState: false,
//   kidsState: false,
//   filterState: false,
// };
// const ProductSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     gender: (state, action) => {
//       state.data = state.globalData.filter((g) => g.gender === action.payload);
//     },
//     genderInitialState: (state) => {
//       state.data = data;
//     },
//     men: (state, action) => {
//       state.menState = action.payload;
//     },
//     women: (state, action) => {
//       state.womenState = action.payload;
//     },
//     kids: (state, action) => {
//       state.kidsState = action.payload;
//     },
//     category: (state, action) => {
//       console.log(action.payload);
//       switch (action.payload) {
//         case "all":
//           state.data = state.globalData;
//           break;
//         case "shose":
//           state.data = state.globalData.filter(
//             (shose) => shose.category === "shose"
//           );
//           break;
//         case "apparel":
//           state.data = state.globalData.filter(
//             (apparel) => apparel.category === "apparel"
//           );
//           break;
//         case "accessories":
//           state.data = state.globalData.filter(
//             (accessories) => accessories.category === "accessories"
//           );
//           break;
//       }
//     },
//     color: (state, action) => {
//       switch (action.payload) {
//         case "green":
//           state.data = state.globalData.filter((c) => c.color === "green");
//           break;
//         case "blue":
//           state.data = state.globalData.filter((c) => c.color === "blue");
//           break;
//         case "pink":
//           state.data = state.globalData.filter((c) => c.color === "pink");
//           break;
//         case "white":
//           state.data = state.globalData.filter((c) => c.color === "white");
//           break;
//         case "lightGreen":
//           state.data = state.globalData.filter((c) => c.color === "lightGreen");
//           break;
//         case "red":
//           state.data = state.globalData.filter((c) => c.color === "red");
//           break;
//         case "black":
//           state.data = state.globalData.filter((c) => c.color === "black");
//           break;
//         case "yellow":
//           state.data = state.globalData.filter((c) => c.color === "yellow");
//           break;
//       }
//     },
//     filter: (state, action) => {
//       state.filterState = action.payload;
//     },
//   },
// });
// export const selectProductState = (state) => state.product.data;
// export const selectMenState = (state) => state.product.menState;
// export const selectWomenState = (state) => state.product.womenState;
// export const selectKidsState = (state) => state.product.kidsState;
// export const selectFilterState = (state) => state.product.filterState;
// export const {
//   gender,
//   genderInitialState,
//   men,
//   women,
//   kids,
//   color,
//   category,
//   filter,
// } = ProductSlice.actions;
// export default ProductSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/Pages/Product/Product_Data";

const initialState = {
  globalData: data,
  data: data,
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
      state.data = state.globalData.filter((g) => g.gender === action.payload);
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
      console.log(action.payload);
      switch (action.payload) {
        case "all":
          state.data = state.data;
          break;
        case "shose":
          state.data = state.data.filter((shose) => shose.category === "shose");
          break;
        case "apparel":
          state.data = state.data.filter(
            (apparel) => apparel.category === "apparel"
          );
          break;
        case "accessories":
          state.data = state.data.filter(
            (accessories) => accessories.category === "accessories"
          );
          break;
      }
    },
    color: (state, action) => {
      switch (action.payload) {
        case "green":
          state.data = state.globalData.filter((c) => c.color === "green");
          break;
        case "blue":
          state.data = state.globalData.filter((c) => c.color === "blue");
          break;
        case "pink":
          state.data = state.globalData.filter((c) => c.color === "pink");
          break;
        case "white":
          state.data = state.globalData.filter((c) => c.color === "white");
          break;
        case "lightGreen":
          state.data = state.globalData.filter((c) => c.color === "lightGreen");
          break;
        case "red":
          state.data = state.globalData.filter((c) => c.color === "red");
          break;
        case "black":
          state.data = state.globalData.filter((c) => c.color === "black");
          break;
        case "yellow":
          state.data = state.globalData.filter((c) => c.color === "yellow");
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
