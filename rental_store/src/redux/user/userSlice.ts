import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createRoutine } from "redux-saga-routines";

import { IInitialState } from "./user.interface";

export const login = createRoutine("LOGIN");
export const logout = createRoutine("LOGOUT");

  const initialState: IInitialState = {
    user: {
      token: "",
      email: "",
      isActivated: null,
      id: "",
    },
    isAuth: false,
    loading: true,
  };
  

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(login.REQUEST, (state) => {
          state.loading = state.loading = true;
        })
        .addCase(login.SUCCESS, (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.user.token = action.payload;
          state.isAuth = true;
        })
        .addCase(login.FAILURE, (state, action) => {
          state.loading = state.loading = false;
        })
    },
  });
  
  export default userSlice.reducer;
  