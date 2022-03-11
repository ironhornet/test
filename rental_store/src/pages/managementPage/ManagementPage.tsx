import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Box, FormControlLabel, Checkbox, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  deleteProduct,
  getProductMenagementList,
} from "../../redux/management/managementSlice";
import ItemCard from "../../components/card/ProductCard";
import { useAppSelector } from "../../hooks/redux/redux";
import { RootState } from "../../redux/store";
import PaginationRow from "../../components/pagination/Pagination";
import Loader from "../../components/loader/Loader";
import ModalWindow from "../../components/modal/ModalWindow";
import EditebleCard from "../../components/editebleCard/EditebleCard";
import { IProduct } from "../../redux/management/management.interface";
import { useStylesManagementPage } from "./managementPage.theme";

const IMAGE_LINK = "https://www.fillmurray.com/345/190";

const ManagementPage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [productData, setProdctData] = useState<IProduct | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const classes = useStylesManagementPage();

  //TODO

  const dispatch = useDispatch();
  const { products, loading } = useAppSelector(
    (state: RootState) => state.managementReducer
  );
  const menageModal = () => {
    setIsOpen(!isOpen);
    setProdctData(null);
  };

  const onChangeHandler = (num: number) => {
    setPageNumber(num);
  };

  useEffect(() => {
    dispatch(getProductMenagementList(pageNumber));
  }, [pageNumber]);

  const handleChecboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;

    if (checked) {
      setCheckedItems([...checkedItems, Number(value)]);
    } else {
      const filtered = checkedItems.filter((item) => item !== Number(value));
      setCheckedItems(filtered);
    }
  };

  const handleDelete = () => {
    dispatch(deleteProduct(checkedItems));
    setCheckedItems([]);
  };

  const handleClickEdit = (product: IProduct) => () => {
    setProdctData(product);
    setIsOpen(true);
  };

  const mapItemCard = () => {
    return products.map((product) => (
      <ItemCard
        key={product.id}
        title={product.title}
        description={product.body}
        price={product.price}
        img={IMAGE_LINK}
      >
        <>
          <FormControlLabel
            control={
              <Checkbox 
                onChange={handleChecboxChange} 
                value={product.id} 
              />
            }
            label="Delete"
          />

          <Button
            size="small"
            variant="outlined"
            onClick={handleClickEdit(product)}
          >
            edit product
          </Button>
        </>
      </ItemCard>
    ));
  };

  return (
    <Box className={classes.pageWrapper}>
      {loading && <Loader />}
      {!loading && (
        <>
          <Stack
            className={classes.buttonsBox}  
            direction="row" 
            spacing={2} 
          >
            <Button onClick={menageModal}>add new product</Button>
            {!!checkedItems.length && (
              <Button
                onClick={handleDelete}
                variant="outlined"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            )}
          </Stack>

          <Box className={classes.cardListBox}>
            {mapItemCard()}

            <PaginationRow
              pageNumber={pageNumber}
              onChangeHandler={onChangeHandler}
              countOfProducts={100}
            />
          </Box>
        </>
      )}

      <ModalWindow isOpen={isOpen} onClose={menageModal}>
        <EditebleCard
          title={productData?.title || ""}
          body={productData?.body || ""}
          price={productData?.price || ""}
          id={productData?.id || ""}
          handleClose={menageModal}
        />
      </ModalWindow>
    </Box>
  );
};

export default ManagementPage;
