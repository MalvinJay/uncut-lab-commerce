import { Cart, SummaryInfo } from "@/src/interfaces";
import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

export interface CartState {
  items: Cart[],
  summary: SummaryInfo
}

const initialState: CartState = {
  items: [],
  summary: {
    total: 0,
    sub_total: 0,
    quantity: 0,
    currency: "$",
    delivery: "In-Store Pickup",
    tax: 0
  }
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: () => initialState,
    addToCart: (state, action: PayloadAction<Cart>) => {
      // Check if item already exists in state, update the quantity value
      let newList = [];
      const findItem = current(state).items.find(el => el.id === action.payload.id);

      if (findItem) {
        newList = current(state).items.slice(0).map(el => {
          if (el.id === findItem.id) return { ...el, quantity: el.quantity + action.payload.quantity}
          else return el
        })
      }
      else newList = [...current(state).items, action.payload]

      state.items = newList
    },
    updateCart: (state, action: PayloadAction<Cart>) => {
      let newList = current(state).items;
      const findItem = newList.find(el => el.id === action.payload.id);
      const updatedList = newList.map((el) => {
        if (el.id === findItem?.id) return { ...el, quantity: action.payload?.quantity }
        else return el
      })
      state.items = updatedList
    },
    removeFromCart: (state, action: PayloadAction<Cart>) => {
      const newList = state.items.slice(0).filter(el => el.id !== action.payload.id)
      state.items = newList
    },
    clearCart: (state, action: PayloadAction<[]>) => {
      state.items = []
    },
    updateOrderSummary: (state, action: PayloadAction<SummaryInfo>) => {
      state.summary = { ...state.summary, ...action.payload}
    }
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  clearCart,
  updateOrderSummary,
  reset,
} = cartSlice.actions;

export default cartSlice.reducer;
