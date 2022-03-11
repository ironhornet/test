export interface IProduct {
  body: string;
  id: number;
  title: string;
};

export interface IInitialState {
  products: IProduct[];
  loading: boolean;
  error: null | string;
};
