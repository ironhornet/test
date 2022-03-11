import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { jsonplaceholderInterseptor } from "../../utils/jsonplaceholderInterseptor";
import { reducer } from "./fullProductCardPage.reducer";
import { IState } from "./fullProductCardPage.interface";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../redux/favorites/favoritesSlice";
import { useStylesFullProductCard } from "./fullProductPage.theme";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const initialState: IState = {
  product: null,
  loading: false,
  error: "",
};

const IMAGE_LINK = "https://www.fillmurray.com/900/600";

const FullProductCardPage = () => {
  const [stateData, dispatch] = useReducer(reducer, initialState);
  const [disabledButton, setDisabledButton] = useState(false);

  const classes = useStylesFullProductCard();

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatchFavorites = useDispatch();

  useEffect(() => {
    dispatch({ field: "loading", value: true });

    const getData = async () => {
      await jsonplaceholderInterseptor
        .get(`posts/${id}`)
        .then((result) => {
          dispatch({ field: "product", value: result.data });
        })
        .catch((error) => {
          dispatch({ field: "error", value: error });
        })
        .finally(() => {
          dispatch({ field: "loading", value: false });
        });
    };
    getData();
  }, [id]);

  const handleClick = () => {
    if (stateData.product) {
      dispatchFavorites(addToFavorite(stateData.product));
    }
    setDisabledButton(true);
  };

  return (
    <Box className={classes.pageWarapper}>
      <Card className={classes.cardBox}>
        <CardMedia
          component="img"
          height="400"
          image={IMAGE_LINK}
          alt="cardImage"
        />

        <Box className={classes.contentBox}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              {stateData.product?.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {stateData.product?.body}
            </Typography>
          </CardContent>

          <CardContent>
            <Box className={classes.priceBox}>
              <Typography 
                variant="h5" 
                color="text.secondary"
              >
                Price:
              </Typography>

              <Typography 
                variant="h5" 
                color="text.secondary"
              >
                200$
              </Typography>
            </Box>

            <Box className={classes.buttonBox}>
              <Button
                startIcon={<ArrowBackIcon />}
                variant="contained"
                onClick={() => navigate(-1)}
              >
                go back
              </Button>

              <Button
                className={classes.button}
                disabled={disabledButton}
                variant="contained"
                onClick={handleClick}
              >
                {!disabledButton ? "add to favorite" : "added"}
              </Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};
export default FullProductCardPage;
