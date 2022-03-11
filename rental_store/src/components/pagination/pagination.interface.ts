export interface IPaginationRowProps {
  pageNumber: number;
  countOfProducts: number;
  onChangeHandler: (valure: number) => void;
}