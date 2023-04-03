import { SummaryInfo, CheckoutInfo } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface checkoutState {
  items: SummaryInfo[],
  address: CheckoutInfo
}

export const initialState: checkoutState = {
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
    reset: () => initialState,
    saveAddress: (state, action: PayloadAction<CheckoutInfo>) => {
      state.address = { ...state.address, ...action.payload}
    }  
  },
});

export const {
  saveAddress,
  reset,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
