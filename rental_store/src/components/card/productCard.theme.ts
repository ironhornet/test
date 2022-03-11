import { makeStyles } from "@mui/styles";

export const useStylesProductCard = makeStyles(() => ({
  priceBox: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    justifyContent: "start",
    gridColumnGap: "8px",
    marginBottom: "10px",
  },
  childrenBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  cardBox: {
    transition: "box-shadow .3s",
    maxWidth: 345,
    minHeight: 390,
    border: "2px solid #ccc",
    borderRadius: "15px",

    "&:hover": {
      boxShadow: " 0px 0px 14px 7px rgba(34, 60, 80, 0.2)",
    },
  },
  cropTitle: {
    "&&": {
      whiteSpace: "nowrap",
      overflowX: "hidden",
      textOverflow: "ellipsis",
    },
  },
  cropDescriptopon: {
    "&&": {
      display: "-webkit-box",
      "-webkit-line-clamp": 4,
      "-webkit-box-orient": "vertical",
      overflowY: "hidden",
    },
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 250,
  },
  cardContentWraper: {
    "&&": {
      padding: "0 16px",
    },
  },
}));
