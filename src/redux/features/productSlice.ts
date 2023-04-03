import { Product } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productsList } from '@/src/data/products'

export interface productState {
  products: Product[]
}

const initialState: productState = {
  products: productsList // Fixed list
}

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState
  },
});

export const {
  reset,
} = productSlice.actions;

export default productSlice.reducer;
