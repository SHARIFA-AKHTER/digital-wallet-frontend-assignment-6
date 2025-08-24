

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
  to?: string; 
    receiverId: string;
}
