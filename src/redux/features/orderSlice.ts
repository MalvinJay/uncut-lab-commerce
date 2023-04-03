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
    placeOrder: (state, action: PayloadAction<Order[]>) => {
      state.orders = [...current(state).orders, ...action.payload]
    },  
    repeatOrder: (state, action: PayloadAction<Order>) => {
      state.orders = [...current(state).orders, action.payload]
    }
  },
});

export const {
  placeOrder,
  repeatOrder,
  reset,
} = orderSlice.actions;

export default orderSlice.reducer;
