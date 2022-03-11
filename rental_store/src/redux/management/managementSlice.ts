import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";
import { IProduct } from "../favorites/favorites.interface";

import { IInitialState } from "../management/management.interface";
import { removeProduct, updateProduct } from "./helpers/managementHelpers";

export const getProductMenagementList = createRoutine(
  "GET_PROUCT_MANAGEMENT_LIST"
);
export const deleteProduct = createRoutine("DELETE_PRODUCT");
export const editProduct = createRoutine("EDIT_PRODUCT");
export const addProduct = createRoutine("ADD_PRODUCT");

const initialState: IInitialState = {
  products: [],
  loading: true,
  error: null,
};

export const menegamentSlice = createSlice({
  name: "management",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductMenagementList.REQUEST, (state) => {
        state.loading = state.loading = true;
      })
      .addCase(
        getProductMenagementList.SUCCESS,
        (state, action: PayloadAction<IProduct[]>) => {
          state.loading = state.loading = false;
          state.products = action.payload;
        }
      )
      .addCase(getProductMenagementList.FAILURE, (state) => {
        state.loading = state.loading = false;
      })
      .addCase(deleteProduct.REQUEST, (state) => {
        state.loading = state.loading = true;
      })
      .addCase(
        deleteProduct.SUCCESS,
        (state, action: PayloadAction<number[]>) => {
          state.products = removeProduct(state, action);
          state.loading = state.loading = false;
        }
      )
      .addCase(deleteProduct.FAILURE, (state) => {
        state.loading = state.loading = false;
      })
      .addCase(editProduct.REQUEST, (state) => {
        state.loading = state.loading = true;
      })
      .addCase(
        editProduct.SUCCESS,
        (state, action: PayloadAction<IProduct>) => {
          state.products = updateProduct(state, action);
          state.loading = state.loading = false;
        }
      )
      .addCase(editProduct.FAILURE, (state) => {
        state.loading = state.loading = false;
      });
  },
});

export default menegamentSlice.reducer;
