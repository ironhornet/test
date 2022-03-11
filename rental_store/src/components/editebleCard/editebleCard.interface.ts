export interface IEditebleCardProps {
  title: string;
  body: string;
  id: number | string;
  price: number | string;
  handleClose: () => void;
}


export interface IInitialValues {
  title: string;
  body: string;
}
