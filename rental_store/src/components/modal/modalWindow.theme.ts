import { makeStyles } from "@mui/styles";

export const useStylesModalWindow = makeStyles(() => ({
  modalChildrenBox: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: "32px",
    border: "2px solid #000",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
}));

