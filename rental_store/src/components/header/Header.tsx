import {
  Tooltip,
  AppBar,
  Box,
  IconButton,
  Avatar,
  Container,
} from "@mui/material";
import { NavLink, Link } from "react-router-dom";

import { useStylesHeader } from "./header.theme";
import logo from "../../images/logo2.png";

const Header = () => {
  const classes = useStylesHeader();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box className={classes.headerBox}>
          <Box className={classes.imageBox}>
            <Link to="/products">
            <img 
              className={classes.img} 
              src={logo} 
              alt="logo" 
            />
            </Link>
          </Box>

          <Box className={classes.navBar}>
            <NavLink 
              className={classes.buttonNav} 
              to="/products"
            >
              Products
            </NavLink>

            <NavLink 
              className={classes.buttonNav} 
              to="/favorites"
            >
              Favorites
            </NavLink>

            <NavLink 
              className={classes.buttonNav} 
              to="/management"
            >
              Management
            </NavLink>

            <NavLink 
              className={classes.buttonNav} 
              to="/login"
            >
              Login
            </NavLink>
          </Box>

          {/* <Button sx={{ my: 2, color: "white", display: "block" }}>
            login logout
          </Button> */}

          <Tooltip title="Open settings">
            <IconButton >
              <Avatar 
                alt="Remy Sharp" 
                src="/static/images/avatar/2.jpg" 
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
