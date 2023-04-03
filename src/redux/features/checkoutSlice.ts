import { SummaryInfo, CheckoutInfo } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface checkoutState {
  items: SummaryInfo[],
  address: CheckoutInfo
}

const initialState: checkoutState = {
  items: [],
  address: {
    firstname: "",
    lastname: "",
    email: "",
    phone_number: "",
    address: "",
    address2: "",
    town_city: "",
    country: "",
    state: "",
    zip_postcode: "",
    date: "",
    time: "",
    description: ""
  }
}

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    reset: () => initialState
  },
});

export const {
  reset,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
