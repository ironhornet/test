import { useStylesFavoritesPage } from "./favoritesPage.theme";
import ItemCard from "../../components/card/ProductCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux/redux";
import { RootState } from "../../redux/store";
import { removeFromFavorite } from "../../redux/favorites/favoritesSlice";
import Oops from "../../components/oops/Oops";
import { Box } from "@mui/system";
import { Button }  from '@mui/material';

const IMAGE_LINK = "https://www.fillmurray.com/345/190";

const FavoritesPage = () => {
  const classes = useStylesFavoritesPage();
  const { products } = useAppSelector(
    (state: RootState) => state.favoritesReducer
  );
  const dispatch = useAppDispatch();

  const dispatchProductId = (id: number) => () => {
    dispatch(removeFromFavorite(id));
  };

  const mapItemCard = () => {
    return products.map((product) => {
      return (
        <ItemCard
          key={product.id}
          title={product.title}
          description={product.body}
          // price={product.price}
          img={IMAGE_LINK}
          
        >
          <Button
            onClick={dispatchProductId(product.id)}
            variant="outlined"
            size="small"
          >
            Remove From Favorite
          </Button>
        </ItemCard>
      );
    });
  };

  return (
    <Box className={classes.pageWrapper}>
      {!products.length && (
        <Oops 
          text={"no favorite products yet"} 
          linkPath={"products"} 
        />
      )}

      {!!products.length && mapItemCard()}
    </Box>
  );
};

export default FavoritesPage;
