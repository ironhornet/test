import { makeStyles } from "@mui/styles";

export const useStylesHeader = makeStyles(() => ({
  img: {
    width: "100%",
    height: "100%",
  },
  imageBox: {
    width: "130px",
    height: "90px",
  },
  navBar: {
    display: "flex",
  },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonNav: {
    "&.active": {
      paddingBottom: "3px",
      borderBottom: "2px solid",
    },
    "&&": {
      margin: "20px 10px",
      color: "white",
      display: "block",
    },
  },
}));
