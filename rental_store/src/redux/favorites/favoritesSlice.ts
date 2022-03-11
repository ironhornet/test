import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { deleteFromFavorite } from "./helpers/favoritesHelpers";
import { IInitialState, IProduct } from "./favorites.interface";


const initialState: IInitialState = {
  products: [],
  loading: true,
  error: null,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IProduct>) {
      state.products = [...state.products, action.payload];
    },
    removeFromFavorite(state, action: PayloadAction<number>) {
      state.products = deleteFromFavorite(state, action);
    },
  },
  extraReducers: {},
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
