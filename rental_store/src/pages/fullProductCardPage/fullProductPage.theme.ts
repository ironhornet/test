import { makeStyles } from "@mui/styles";

export const useStylesFullProductCard = makeStyles(() => ({
  pageWarapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&&": {
      padding: "0 20px",
    },
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceBox: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    justifyContent: "start",
    gridColumnGap: "8px",
    marginBottom: "10px",
  },
  cardBox: {
    transition: "box-shadow .3s",
    width: "65%",
    minHeight: 400,
    border: "2px solid #ccc",
    "&&": {
      borderRadius: "15px",
    },
    "&:hover": {
      boxShadow: " 0px 0px 14px 7px rgba(34, 60, 80, 0.2)",
    },
  },
  button: {
    "&&": {
      width: "163px",
    },
    "&:disabled": {
      "&&": {
        color: "#fff",
        backgroundColor: "#4caf50",
        "-webkit-transition": "background-color 0.4s ease-out",
        "-moz-transition": "background-color 0.4s ease-out",
        "-o-transition": "background-color 0.4s ease-out",
        transition: "background-color 0.4s ease-out",
      },
    },
  },
}));
