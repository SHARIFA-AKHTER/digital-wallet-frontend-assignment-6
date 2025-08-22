// export interface BalanceRes {
//   balance: number;
//   currency: string; // optional: "BDT"
// }

// export interface DepositReq {
//   amount: number;
//   agentId?: string; 
// }

// export interface WithdrawReq {
//   amount: number;
// }

// export interface TransferReq {
//   receiver: string; 
//   amount: number;
// }

// export interface WalletActivity {
//   id: string;
//   type: "DEPOSIT" | "WITHDRAW" | "TRANSFER-IN" | "TRANSFER-OUT";
//   amount: number;
//   balanceAfter: number;
//   createdAt: string;
// }


// import { Types } from "mongoose";
// export interface IWallet {
//   _id: string;
//   user: Types.ObjectId | string;
//   balance: number;
//   isBlocked: boolean;
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// }

// export interface WalletRes {
//   success: boolean;
//   message: string;
//   data: IWallet;
// }

// export interface WalletActionReq {
//   amount: number;
//   to?: string; 
// }

// src/features/wallet/types.ts

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
  to?: string; // send money only
}
