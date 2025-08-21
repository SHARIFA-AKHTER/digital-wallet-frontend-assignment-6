export interface BalanceRes {
  balance: number;
  currency: string; // optional: "BDT"
}

export interface DepositReq {
  amount: number;
  agentId?: string; 
}

export interface WithdrawReq {
  amount: number;
}

export interface TransferReq {
  receiver: string; 
  amount: number;
}

export interface WalletActivity {
  id: string;
  type: "DEPOSIT" | "WITHDRAW" | "TRANSFER-IN" | "TRANSFER-OUT";
  amount: number;
  balanceAfter: number;
  createdAt: string;
}
