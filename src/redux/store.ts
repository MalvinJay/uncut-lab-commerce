import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import { accountSlice } from "./features/accountSlice";
import { cartSlice } from "./features/cartSlice";
import { checkoutSlice } from "./features/checkoutSlice";
import { orderSlice } from "./features/orderSlice";
import { productSlice } from "./features/productSlice";

// Reducers
const rootReducer = combineReducers({
  [accountSlice.name]:  accountSlice.reducer,
  [cartSlice.name]: cartSlice.reducer,
  [checkoutSlice.name]: checkoutSlice.reducer,
  [orderSlice.name]: orderSlice.reducer,
  [productSlice.name]: productSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
