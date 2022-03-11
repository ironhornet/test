interface IProduct {
  id: number;
  title: string;
  body: string;
  price: number | string
}

export interface IState {
  product: IProduct | null;
  error: string;
  loading: boolean;
}

export type ActionType = {
  field: "product";
  value: IProduct;
} | {
  field: "error";
  value: string;
} | {
  field: "loading";
  value: boolean;
};
