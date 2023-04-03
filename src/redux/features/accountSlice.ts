import { Account } from "@/src/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface accountState {
    account: Account
}

const initialState: accountState = {
  account: {
    id: 0, 
    name: "", 
    tag: "", 
    category: "",
    currency: "", 
    date_created: "", 
    description: ""
  }
}

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    reset: () => initialState
  },
});

export const {
  reset,
} = accountSlice.actions;

export default accountSlice.reducer;
