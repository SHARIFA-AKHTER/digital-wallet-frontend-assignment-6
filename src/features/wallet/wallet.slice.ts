// src/features/wallet/wallet.slice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IWallet } from "./types";

interface WalletState {
  balance: number;
  transactions: IWallet["transactions"];
}

const initialState: WalletState = {
  balance: 0,
  transactions: [],
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWallet: (state, action: PayloadAction<IWallet>) => {
      state.balance = action.payload.balance;
      state.transactions = action.payload.transactions;
    },
    addTransaction: (state, action: PayloadAction<IWallet["transactions"][number]>) => {
      state.transactions.unshift(action.payload);
    },
  },
});

export const { setWallet, addTransaction } = walletSlice.actions;
export default walletSlice.reducer;
