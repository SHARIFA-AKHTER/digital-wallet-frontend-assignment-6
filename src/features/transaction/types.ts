export type TransactionType = "DEPOSIT" | "WITHDRAW" | "TRANSFER";
export type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";

export interface Transaction {
 _id: string;
  wallet: string;
  type: "cashIn" | "cashOut";
  amount: number;
  fee: number;
  commission: number;
  status: string;
  fromUser: string;
  toUser: string;
  createdAt: string;
  updatedAt: string;
}

export interface TransactionFilters {
  page?: number;
  limit?: number;
  type?: TransactionType;
  status?: TransactionStatus;
  fromDate?: string;
  toDate?: string;
  minAmount?: number;
  maxAmount?: number;
  q?: string; 
}

export interface PaginatedRes<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
export interface ITransaction {
  commission: number;
 toUser: string;
  fromUser: string;
  _id: string;
 type: 'add' | 'withdraw' | 'send' | 'receive' | 'cashIn' | 'cashOut'| string;

  amount: number;
  fee: number;
  status: "pending" | "completed" | "reversed"| string;
  sender?: string;
  receiver?: string;
  createdAt: string;
}

export interface ITransactionListResponse {
  data: ITransaction[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}