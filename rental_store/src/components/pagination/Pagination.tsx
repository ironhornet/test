import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";
import { FC } from "react";
import { useStylesPagination } from "./pagination.theme"
import { IPaginationRowProps } from "./pagination.interface"

const PaginationRow:FC<IPaginationRowProps> = (props) => {
  const { 
    pageNumber, 
    countOfProducts,
    onChangeHandler, 
  } = props;
  const classes = useStylesPagination();

  const calculatePaginationButtons = () => Math.ceil(countOfProducts / 12);

  return (
    <Box className={classes.paginationBox}>
      <Pagination
        count={calculatePaginationButtons()}
        page={pageNumber}
        onChange={(_, num) => onChangeHandler(num)}
      />
    </Box>
  );
};

export default PaginationRow;
