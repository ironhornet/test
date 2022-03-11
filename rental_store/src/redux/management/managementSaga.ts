import { put, call, takeEvery, all } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

import {
  getProductMenagementList,
  deleteProduct,
  editProduct,
  addProduct,
} from "./managementSlice";
import { getItemPrice } from "../helpers/helpers";
import { jsonplaceholderInterseptor } from "../../utils/jsonplaceholderInterseptor";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "./management.interface";

export function* getManagementListWorcker(data: PayloadAction<number>) {
  const { success, failure, request } = getProductMenagementList;

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

export function* getManagementListWatcher() {
  yield takeEvery(getProductMenagementList.TRIGGER, getManagementListWorcker);
}

export function* deleteProductWorker(data: PayloadAction<number[]>) {
  const { success, failure, request } = deleteProduct;

  try {
    yield put(request());
    yield all(
      data.payload.map((item) =>
        call(jsonplaceholderInterseptor.delete, `posts/${item}`)
      )
    );
    yield put(success(data.payload));
  } catch (error: any) {
    yield put(failure(error.response?.data?.message));
  }
}

export function* deleteProductWatcher() {
  yield takeEvery(deleteProduct.TRIGGER, deleteProductWorker);
}

export function* updateProductWorker(data: PayloadAction<IProduct>) {
  const { id, body, title, price } = data.payload;

  const { success, failure, request } = editProduct;

  try {
    yield put(request());
    const response: AxiosResponse = yield call(
      jsonplaceholderInterseptor.patch,
      `posts/${id}`,
      { body, title, price }
    );

    yield put(success(response.data));
  } catch (error: any) {
    yield put(failure(error.response?.data?.message));
  }
}

export function* updateProductWatcher() {
  yield takeEvery(editProduct.TRIGGER, updateProductWorker);
}

function* addNewProdctWorker(data: PayloadAction<IProduct>) {
  const { title, body, price } = data.payload;
  const { success, failure, request } = addProduct;
  try {
    yield request();
    yield call(
      jsonplaceholderInterseptor.post,
      `posts/`,
      { body, title, price }
    );
    yield put(success(data.payload));
  } catch (error: any) {
    yield put(failure(error.response?.data?.message));
  }
}

export function* addNewProdctWatcher() {
  yield takeEvery(addProduct.TRIGGER, addNewProdctWorker);
}
