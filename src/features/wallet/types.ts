import type { ITransactionListResponse } from "../transaction/types";

export interface WalletRes {
  success: boolean;
  message: string;
  data: {
    _id: string;
    user: string;
    balance: number;
    isBlocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface WalletActionReq {
  amount: number;
  receiverId: string;
  userId?: string;
   to?: string;
}
export interface IWallet {
  _id: string;
  user: string;
  balance: number;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
  transactions: ITransactionListResponse[];
}
