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
    reset: () => initialState,
    addToCart: (state, action: PayloadAction<Cart>) => {
      // Check if item already exists in state, update the quantity value
      const findItem = state.items.find(el => el.id === action.payload.id)
      let newList = [];

      if (findItem) {
        newList = state.items.map(el => {
          if (el.id === findItem.id) return { ...el, quantity: el.quantity + findItem.quantity}
          else return el
        })
      }
      else newList = [...state.items, action.payload]

      state.items = newList
    }
  },
});

export const {
  addToCart,
  reset,
} = cartSlice.actions;

export default cartSlice.reducer;
