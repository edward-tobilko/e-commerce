import { configureStore, combineReducers } from "@reduxjs/toolkit";

import currentProduct from "./currentProduct";
import productCart from "./productCart";

// reducers
const rootReducer = combineReducers({
  cart: productCart,
  currentProduct: currentProduct,
});

// store
export const store = configureStore({
  reducer: rootReducer,
});
