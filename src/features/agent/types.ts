export interface AgentOverview {
  totalCashIn: number;
  totalCashOut: number;
  todayCashIn: number;
  todayCashOut: number;
  commissionEarned?: number;
}

export interface AddMoneyReq {
  userId: string;
  amount: number;
}

export interface WithdrawFromUserReq {
  userId: string;
  amount: number;
}

export interface AgentTransaction {
  id: string;
  userId: string;
  amount: number;
  type: "ADD_MONEY" | "WITHDRAW_USER";
  createdAt: string;
}

