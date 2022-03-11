import { signInWatcher, logOffWatcher } from "./user/userSaga";

import { getItemsWatcher } from "./products/productsSaga";

import {
  getManagementListWatcher,
  deleteProductWatcher,
  updateProductWatcher,
} from "./management/managementSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([
    signInWatcher(),
    logOffWatcher(),
    getItemsWatcher(),
    getManagementListWatcher(),
    deleteProductWatcher(),
    updateProductWatcher(),
  ]);
}
