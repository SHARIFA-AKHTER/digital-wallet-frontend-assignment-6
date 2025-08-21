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