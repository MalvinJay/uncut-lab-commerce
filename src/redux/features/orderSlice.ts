import { Order } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    reset: () => initialState
  },
});

export const {
  reset,
} = orderSlice.actions;

export default orderSlice.reducer;
