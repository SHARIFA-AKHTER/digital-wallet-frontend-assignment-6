

import { baseApi } from "@/redux/api/baseApi";
import type { BalanceRes, DepositReq, TransferReq, WithdrawReq } from "./types";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    balance: build.query<BalanceRes, void>({ query: () => "/wallet/balance", providesTags: ["Wallet"] }),
    deposit: build.mutation<{message:string}, DepositReq>({
      query: (body) => ({ url: "/wallet/deposit", method: "POST", body }),
      invalidatesTags: ["Wallet","Transaction"],
    }),
    withdraw: build.mutation<{message:string}, WithdrawReq>({
      query: (body) => ({ url: "/wallet/withdraw", method: "POST", body }),
      invalidatesTags: ["Wallet","Transaction"],
    }),
    sendMoney: build.mutation<{message:string}, TransferReq>({
      query: (body) => ({ url: "/wallet/send", method: "POST", body }),
      invalidatesTags: ["Wallet","Transaction"],
    }),
  }),
});

export const { useBalanceQuery, useDepositMutation, useWithdrawMutation, useSendMoneyMutation } = walletApi;
