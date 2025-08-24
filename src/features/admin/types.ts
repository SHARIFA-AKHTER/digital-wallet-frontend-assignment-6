import type { Key } from "readline";
import type { IUser } from "../auth/types";
import type { Transaction } from "../transaction/types";

// ================== Overview ==================
export interface AdminOverview {
  totalUsers: number;
  totalAgents: number;
  totalTransactions: number;
  totalVolume: number;
}

// ================== User Management ==================
export interface ManageUserRes extends IUser {
  _id: Key | null | undefined;
  blocked: boolean;
}

// ================== Agent Management ==================
export interface ManageAgentRes extends IUser {
  approved: boolean;
}

export interface IAgent {
  _id: string;
  name: string;
  email: string;
  phone: string;
  status: "pending" | "approved" | "suspended";
  createdAt: string;
  updatedAt: string;
}

export interface IAgentListResponse {
  data: IAgent[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}

// ================== Transactions ==================
export interface AdminTransaction extends Omit<Transaction, "fee"> {
  fee?: number;
}
// ================== System Settings ==================
export interface SystemSettings {
  data: any;
  transactionFee: number; 
  maxLimit: number;     
  minLimit: number;   
}
