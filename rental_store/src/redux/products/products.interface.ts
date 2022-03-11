export interface IProduct {
  body: string;
  id: number;
  title: string;
  price: string;
}

export interface IInitialState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
}