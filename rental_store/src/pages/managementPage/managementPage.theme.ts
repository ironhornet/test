import { makeStyles } from "@mui/styles";

export const useStylesManagementPage = makeStyles(() => ({
  contentBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 250,
  },
  cardListBox: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "start",
    rowGap: "35px",
    columnGap: "30px",
  },
  pageWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  buttonsBox: {
    marginBottom: 15
  }
}));
