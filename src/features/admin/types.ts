import type { IUser } from "../auth/types";
import type { Transaction } from "../transaction/types";


export interface AdminOverview {
  totalUsers: number;
  totalAgents: number;
  totalTransactions: number;
  totalVolume: number;
}

export interface ManageUserRes extends IUser {
  blocked: boolean;
}

export interface ManageAgentRes extends IUser {
  approved: boolean;
}

export interface AdminTransaction extends Transaction {
  fee?: number;
}

export interface SystemSettings {
  transactionFee: number; 
  maxLimit: number;       
  minLimit: number;       
}
