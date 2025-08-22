// src/features/wallet/wallet.api.ts
import { baseApi } from "@/redux/api/baseApi";
import type { WalletRes, WalletActionReq } from "./types";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMyWallet: build.query<WalletRes, void>({
      query: () => ({ url: "/wallet/me", method: "GET" }),
      providesTags: ["WALLET"],
    }),

    addMoney: build.mutation<WalletRes, WalletActionReq>({
      query: (body) => ({ url: "/wallet/add", method: "POST", body }),
      invalidatesTags: ["WALLET"],
    }),

    withdrawMoney: build.mutation<WalletRes, WalletActionReq>({
      query: (body) => ({ url: "/wallet/withdraw", method: "POST", body }),
      invalidatesTags: ["WALLET"],
    }),

    sendMoney: build.mutation<WalletRes, WalletActionReq>({
      query: (body) => ({ url: "/wallet/send-money", method: "POST", body }),
      invalidatesTags: ["WALLET"],
    }),
  }),
});

export const {
  useGetMyWalletQuery,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
  useSendMoneyMutation,
} = walletApi;
