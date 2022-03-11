import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router";

import { login } from "../../redux/user/userSlice";
import { useAuth } from "../../hooks/auth/useAuth";

const theme = createTheme();

type LocationState = {
  from: {
    pathname: string;
  };
};
const LoginFrom = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const from = (location.state as LocationState)?.from?.pathname;

  function handleClickLogin() {
    signIn(() => navigate(from, { replace: true }));
  }

  const handleClickRegistration = () => {
    // dispatch(registration({ email, password }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={handleClickLogin}
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "45%" }}
              >
                Sign In
              </Button>
              <Button
                onClick={handleClickRegistration}
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, width: "45%" }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginFrom;
