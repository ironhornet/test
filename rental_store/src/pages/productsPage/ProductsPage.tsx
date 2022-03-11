import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

import {useStylesProductPage} from "./productPage.theme"
import ItemCard from "../../components/card/ProductCard";
import { getProductList } from "../../redux/products/productsSlice";
import { useAppSelector } from "../../hooks/redux/redux";
import { RootState } from "../../redux/store";
import PaginationRow from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";

const IMAGE_LINK = "https://www.fillmurray.com/345/190";

const ProductsPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStylesProductPage()

  const dispatch = useDispatch();
  const { 
    products, 
    loading 
  } = useAppSelector(
    (state: RootState) => state.productsReducer
  );

  const onChangeHandler = (num: number) => {
    setPageNumber(num);
  };

  useEffect(() => {
    dispatch(getProductList(pageNumber));
  }, [pageNumber]);

  const mapItemCard = () => {
    return products.map((product) => {
      return (
        <Link 
          key={product.id} 
          to={`${product.id}`}
        >
          <ItemCard
            title={product.title}
            description={product.body}
            price={product.price}
            img={IMAGE_LINK}
          />
        </Link>
      );
    });
  };

  return (
    <Box className={classes.cardListBox}>
      {loading && <Loader />}
      {!loading && (
        <>
          {mapItemCard()}

          <PaginationRow
            pageNumber={pageNumber}
            onChangeHandler={onChangeHandler}
            countOfProducts={100}
          />
        </>
      )}
    </Box>
  );
};

export default ProductsPage;
