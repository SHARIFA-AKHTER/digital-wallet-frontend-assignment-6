// import { baseApi } from "@/redux/api/baseApi";
// import type { Transaction } from "./types";

// export const transactionApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getTransactions: build.query<Transaction[], void>({
//       query: () => "/transactions", 
//       providesTags: ["TRANSACTION"], 
//     }),
//   }),
// });

// export const { useGetTransactionsQuery } = transactionApi;


// src/redux/features/transaction/transactionApi.ts
import { baseApi } from "@/redux/api/baseApi";
import type { Transaction } from "./types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // ✅ Transaction history query
    getTransactions: build.query<Transaction[], void>({
      query: () => "/transactions",
      providesTags: ["TRANSACTION"],
    }),

    // ✅ Deposit money
    deposit: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
      query: (body) => ({
        url: "/transactions/cash-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"], 
    }),

    // ✅ Withdraw money
    withdraw: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
      query: (body) => ({
        url: "/transactions/cash-out",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    // ✅ Send money to another user
    sendMoney: build.mutation<
      { success: boolean; balance: number },
      { receiver: string; amount: number }
    >({
      query: (body) => ({
        url: "/transactions/send",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useDepositMutation,
  useWithdrawMutation,
  useSendMoneyMutation,
} = transactionApi;
