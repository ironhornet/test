import { IProduct } from "../management/management.interface";

export const randomPrice = () => {
  const random = 199 + Math.random() * (3999 + 1 - 199);

  return Math.floor(random);
};

export const getItemPrice = (products: IProduct[]) => (
  products.map(item => (
    {...item, price: randomPrice()}
  ))
);
