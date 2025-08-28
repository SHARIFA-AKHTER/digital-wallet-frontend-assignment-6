/* eslint-disable @typescript-eslint/no-explicit-any */

// import { baseApi } from "@/redux/api/baseApi";
// import type { ITransaction, Transaction } from "./types";

// export const transactionApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     getTransactions: build.query<ITransaction[], void>({
//       query: () => "/transactions/me",
//         transformResponse: (response: any) => response.data,  
//       providesTags: ["TRANSACTION"],
      
//     }),
//     Transactions: build.query<ITransaction[], void>({
//       query: () => "/transactions",
//         transformResponse: (response: any) => response.data,  
//       providesTags: ["TRANSACTION"],
      
//     }),

//     deposit: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
//       query: (body) => ({
//         url: "/transactions/cash-in",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),

//     withdraw: build.mutation<{ success: boolean; balance: number }, { amount: number }>({
//       query: (body) => ({
//         url: "/transactions/cash-out",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),

//     sendMoney: build.mutation<{ success: boolean; balance: number }, { receiver: string; amount: number }>({
//       query: (body) => ({
//         url: "/transactions/send",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["TRANSACTION", "USER"],
//     }),

//     // ✅ Agent commission
//     getAgentCommissions: build.query<Transaction[], void>({
      
//       query: () => "/transactions/agent-commissions",
//         transformResponse: (response: any) => response.data,
//       providesTags: ["TRANSACTION"],
//     }),
//   }),
// });

// export const {
//   useGetTransactionsQuery,
//   useDepositMutation,
//   useWithdrawMutation,
//   useSendMoneyMutation,
//   useGetAgentCommissionsQuery,
// } = transactionApi;

import { baseApi } from "@/redux/api/baseApi";
import type { ITransaction, Transaction } from "./types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // My Transactions
    // getTransactions: build.query<ITransaction[], void>({
    //   query: () => ({
    //     url: "/transactions/me",
    //     method: "GET",
    //   }),
    //   transformResponse: (response: any) => response.data,
    //   providesTags: ["TRANSACTION"],
    // }),

    // All Transactions (admin)
    getAllTransactions: build.query<ITransaction[], void>({
      query: () => ({
        url: "/transactions",
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ["TRANSACTION"],
    }),

    // Deposit / Cash-In
    deposit: build.mutation<{ success: boolean; balance: number }, { amount: number,userId: string }>({
      query: (body) => ({
        url: "/transactions/cash-in",
        method: "POST",
        data: body,   
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    // Withdraw / Cash-Out
    withdraw: build.mutation<{ success: boolean; balance: number }, { amount: number,userId: string }>({
      query: (body) => ({
        url: "/transactions/cash-out",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

    // Send Money
    sendMoney: build.mutation<{ success: boolean; balance: number }, { receiver: string; amount: number }>({
      query: (body) => ({
        url: "/wallet/send-money", 
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["TRANSACTION", "USER"],
    }),

     getUserTransactions: build.query<any[], void>({
      query: () => "/user/transactions",
      providesTags: ["TRANSACTION"],
    }),
    // Agent Commission
    getAgentCommissions: build.query<Transaction[], void>({
      query: () => ({
        url: "/transactions/agent-commissions",
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ["TRANSACTION"],
    }),
  }),
});

export const {
  // useGetTransactionsQuery,
  useGetAllTransactionsQuery,
  useDepositMutation,
  useWithdrawMutation,
  useSendMoneyMutation,
  useGetAgentCommissionsQuery,
   useGetUserTransactionsQuery,
} = transactionApi;
