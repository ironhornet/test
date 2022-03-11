import { Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { FC } from "react";

import { IOopsProps } from "./oops.interface";
import { useStylesOops } from "./oops.theme";
import oops from "../../images/oops.png";

const Oops: FC<IOopsProps> = (props) => {
  const { 
    text, 
    linkPath 
  } = props;
  
  const classes = useStylesOops();

  return (
    <Box className={classes.oopsBox}>
      <Box className={classes.imgBox}>
        <img 
          className={classes.img} 
          src={oops} alt="Ooops!" 
        />
      </Box>

      <Typography 
        className={classes.text} 
        variant="h4"
      >
        {text}, go to{" "}

        <Link 
          className={classes.link} 
          to={`/${linkPath}`}
        >
          {linkPath}
        </Link>
      </Typography>
    </Box>
  );
};

export default Oops;
