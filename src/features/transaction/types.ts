export type TransactionType = "DEPOSIT" | "WITHDRAW" | "TRANSFER";
export type TransactionStatus = "PENDING" | "SUCCESS" | "FAILED";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  from?: string; // userId/email
  to?: string;   // userId/email
  status: TransactionStatus;
  createdAt: string;
  updatedAt?: string;
  handledByAgent?: string; // agentId
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
  q?: string; // search query
}

export interface PaginatedRes<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}
