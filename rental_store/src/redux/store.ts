import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

import userReducer from "./user/userSlice";
import productsReducer from "./products/productsSlice"
import favoritesReducer from "./favorites/favoritesSlice"
import managementReducer from "./management/managementSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
  getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);

const rootReducer = combineReducers({
  userReducer,
  productsReducer,
  favoritesReducer,
  managementReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware,
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
