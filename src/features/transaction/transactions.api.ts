/* eslint-disable @typescript-eslint/no-explicit-any */

// import { baseApi } from "@/redux/api/baseApi";
// import type { Transaction } from "./types";

// export const transactionApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     // ✅ Transaction history query
//     getTransactions: build.query<Transaction[], void>({
//       query: () => "/transactions",
//       providesTags: ["TRANSACTION"],
//     }),

//     // ✅ Deposit money
//     deposit: build.mutation<
//       { success: boolean; balance: number },
//       { amount: number }
//     >({
//       query: (body) => ({
//         url: "/transactions/cash-in",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),

//     // ✅ Withdraw money
//     withdraw: build.mutation<
//       { success: boolean; balance: number },
//       { amount: number }
//     >({
//       query: (body) => ({
//         url: "transactions/cash-out",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),

//     // ✅ Send money to another user
//     sendMoney: build.mutation<
//       { success: boolean; balance: number },
//       { receiver: string; amount: number }>({
//       query: (body) => ({
//         url: "/transactions/send",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),
//   }),
// });

// export const {
//   useGetTransactionsQuery,
//   useDepositMutation,
//   useWithdrawMutation,
//   useSendMoneyMutation,
// } = transactionApi;

import { baseApi } from "@/redux/api/baseApi";
import type { ITransaction, Transaction } from "./types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query<ITransaction[], void>({
      query: () => "/transactions/me",
        transformResponse: (response: any) => response.data,  
      providesTags: ["TRANSACTION"],
      
    }),
    Transactions: build.query<ITransaction[], void>({
      query: () => "/transactions",
        transformResponse: (response: any) => response.data,  
      providesTags: ["TRANSACTION"],
      
    }),

    deposit: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
      query: (body) => ({
        url: "/transactions/cash-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    withdraw: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
      query: (body) => ({
        url: "/transactions/cash-out",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    sendMoney: build.mutation<{ success: boolean; balance: number }, { receiver: string; amount: number }>({
      query: (body) => ({
        url: "/transactions/send",
        method: "POST",
        body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    // ✅ Agent commission
    getAgentCommissions: build.query<Transaction[], void>({
      
      query: () => "/transactions/agent-commissions",
        transformResponse: (response: any) => response.data,
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useDepositMutation,
  useWithdrawMutation,
  useSendMoneyMutation,
  useGetAgentCommissionsQuery,
} = transactionApi;
