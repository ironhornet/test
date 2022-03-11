import { FC } from "react";
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography,
  Box 
} from "@mui/material";

import { IProductCardProps } from "./productCard.interface";
import { useStylesProductCard } from "./productCard.theme";

const ItemCard: FC<IProductCardProps> = (props) => {
  const { 
      title, 
      description, 
      img, 
      price, 
      children 
  } = props;

  const classes = useStylesProductCard();

  return (
    <Card className={classes.cardBox}>
      <CardMedia 
        component="img" 
        height="170" 
        image={img} 
        alt="cardImage"
      />

      <Box className={classes.contentBox}>
        <CardContent>
          <Typography
            className={classes.cropTitle}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>

          <Typography
            className={classes.cropDescriptopon}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
        </CardContent>

        <CardContent className={classes.cardContentWraper}>
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
              {price} $
            </Typography>
          </Box>

          <Box className={classes.childrenBox}>
            {children}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ItemCard;
