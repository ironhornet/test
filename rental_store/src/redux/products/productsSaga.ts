import { put, call, takeEvery } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

import { getProductList } from "./productsSlice";
import { jsonplaceholderInterseptor } from "../../utils/jsonplaceholderInterseptor";
import { getItemPrice } from "../helpers/helpers";

export function* getItemsWorcker(data: PayloadAction<number>) {
  const { success, failure, request } = getProductList;

  try {
    yield put(request());
    const response: AxiosResponse = yield call(
      jsonplaceholderInterseptor.get,
      `posts?_page=${data.payload}&_limit=12`
    );
    yield put(success(getItemPrice(response.data)));
  } catch (error: any) {
    yield put(failure(error.response?.data?.message));
  }
}

export function* getItemsWatcher() {
  yield takeEvery(getProductList.TRIGGER, getItemsWorcker);
}
