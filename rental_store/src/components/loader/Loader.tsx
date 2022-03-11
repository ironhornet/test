import { CircularProgress, Box } from "@mui/material";

import { useStylesLoader } from "./loader.theme"

const Loader = () => {
  const classes = useStylesLoader();

  return (
    <Box className={classes.loaderBox}>
      <CircularProgress  size="60px"/>
    </Box>
  );
};

export default Loader