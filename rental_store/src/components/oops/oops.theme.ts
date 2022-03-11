import { makeStyles } from "@mui/styles";

export const useStylesOops = makeStyles(() => ({
  oopsBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 70,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  imgBox: {
    maxWidth: "600px",
    height: "460px",
  },
  text: {
    "&&": {
      marginTop: 20,
    },
    color: "#666",
    textTransform: "uppercase",
  },
  link: {
    color: "#666",
    textDecoration: "underline",
    "&&": {
      transition: "color 0.5s"
    },
    "&:hover": {
      "&&":{
        color: "#1976d2",
      }
    }
  }
}));
