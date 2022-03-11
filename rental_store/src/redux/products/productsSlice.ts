import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";

import {IInitialState, IProduct} from "./products.interface"

export const getProductList = createRoutine("GET_PRODUCT_LIST");
export const getProduct = createRoutine("GET_PRODUCT");

const initialState: IInitialState = {
  products: [],
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.REQUEST, (state) => {
        state.loading = state.loading = true;
      })
      .addCase(getProductList.SUCCESS, (state, action: PayloadAction<IProduct[]>) => {
        state.loading = state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductList.FAILURE, (state) => {
        state.loading = state.loading = true;
      });
  },
});

export default productsSlice.reducer;
