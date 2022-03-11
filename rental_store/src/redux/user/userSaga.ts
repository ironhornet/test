import { put, call, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import axiosRequest from "../../utils/axiosUtils";
import { login, logout } from "./userSlice";
import { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  email: string;
  password: string;
};

export function* signInWorker(action: PayloadAction<IUser>) {
  // we get here hard coded data, to get real data follow to the 'sign in from' and remove static payload
  const { payload } = action;
  const { success, failure, request } = login;

  try {
    yield put(request());
    const response: AxiosResponse = yield call(
      axiosRequest.post,
      "login",
      payload
    );
    yield localStorage.setItem("token", response.data.token);
    yield put(success(response.data.token));
  } catch (error: any) {
    yield put(failure(error.response?.data?.message));
  }
}

export function* signInWatcher() {
  yield takeEvery(login.TRIGGER, signInWorker);
}

export function* logOffWorker() {
  const { success, failure, request } = logout;

  try {
    yield put(request());
    yield call(axiosRequest.post, "login");
    yield localStorage.removeItem("token");
    yield put(success());
  } catch (error: any) {
    console.log(error.response?.data?.message);
    yield put(failure(error.response?.data?.message));
  }
}

export function* logOffWatcher() {
  yield takeEvery(logout.TRIGGER, logOffWorker);
}
