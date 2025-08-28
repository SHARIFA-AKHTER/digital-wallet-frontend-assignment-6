/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/users/users.api.ts

import { baseApi } from "@/redux/api/baseApi";
import type { WalletActionReq } from "../wallet/types";
import type { ITransaction } from "../transaction/types";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  photo?: string;
};

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWallet: build.query<{ balance: number }, void>({
      query: () => "/user/wallet",
      providesTags: ["WALLET"],
    }),

    // getUserTransactions: build.query<any[], void>({
    //   query: () => "/user/transactions",
    //   providesTags: ["TRANSACTION"],
    // }),

        getTransactions: build.query<ITransaction[], void>({
      query: () => ({
        url: "/transactions/me",
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ["TRANSACTION"],
    }),
    getProfile: build.query<UserProfile, void>({
      query: () => "/users",
      providesTags: ["USER"],
    }),

    updateProfile: build.mutation<
      {
        [x: string]: any; success: boolean; data: UserProfile 
},
      Partial<UserProfile>
    >({
      query: (body) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
    cashIn: build.mutation<any, WalletActionReq>({
      query: (body) => ({
        url: "/transactions/cash-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
    cashOut: build.mutation<any, WalletActionReq>({
      query: (body) => ({
        url: "/transactions/cash-out",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "WALLET"],
    }),
  }),
});

export const {
  useGetWalletQuery,
  // useGetUserTransactionsQuery,
  useGetProfileQuery,
  useUpdateProfileMutation,
  useCashInMutation,
  useCashOutMutation,
  useGetTransactionsQuery,
} = userApi;
