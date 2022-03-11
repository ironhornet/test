import { PayloadAction } from "@reduxjs/toolkit";

import { IInitialState } from "../favorites.interface";

export const deleteFromFavorite = (
  state: IInitialState,
  action: PayloadAction<number>
) => {
  const products = state.products.filter(
    (product) => product.id !== action.payload
  );

  return products;
};
