
import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IProduct } from "../../management/management.interface";

export const removeProduct = (state: IInitialState, action: PayloadAction<number[]>) => {
  
  const productsToDelete = new Set(action.payload);

  const filteredProducts = state.products.filter((product) => !productsToDelete.has(product.id));

  return filteredProducts;
};

export const updateProduct = (state: IInitialState, action: PayloadAction<IProduct>) => {
  
  const updatedProduct = state.products.map((product) => {
    if (product.id === action.payload.id) {
      return {
        ...product,
        body: action.payload.body,
        title: action.payload.title,
        price: action.payload.price,
      };
    }
    
    return product;
  });

  return updatedProduct;
};
