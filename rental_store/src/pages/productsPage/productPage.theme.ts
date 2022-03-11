import { makeStyles } from "@mui/styles";

export const useStylesProductPage = makeStyles(() => ({
  cardListBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    rowGap: "35px",
    columnGap: "30px",
  },
}));
