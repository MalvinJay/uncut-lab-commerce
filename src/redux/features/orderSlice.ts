"use cleint";

import { Order } from "@/src/interfaces";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface orderState {
  orders: Order[];
}

const initialState: orderState = {
  orders: []
}

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: () => initialState,
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    placeOrder: (state, action: PayloadAction<Order[]>) => {
      const newList = [...current(state).orders, ...action.payload];

      // Cache orders for persistency
      localStorage.setItem('orders', JSON.stringify(newList));
      state.orders = newList
    },  
    repeatOrder: (state, action: PayloadAction<Order>) => {
      const newList = [...current(state).orders, action.payload];
      localStorage.setItem('orders', JSON.stringify(newList));
      
      state.orders = newList
    }
  },
});

export const {
  placeOrder,
  repeatOrder,
  setOrders,
  reset,
} = orderSlice.actions;

export default orderSlice.reducer;
