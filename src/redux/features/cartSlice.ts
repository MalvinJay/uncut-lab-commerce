import { Cart } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: Cart[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState
  },
});

export const {
  reset,
} = cartSlice.actions;

export default cartSlice.reducer;
