/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/users/users.api.ts

import { baseApi } from "@/redux/api/baseApi";

// import { baseApi } from "@/redux/api/baseApi";

// export const usersApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     listUsers: build.query<any, {page?:number;limit?:number;q?:string;status?:string}>({
//       query: (params) => ({ url: "/admin/users", params }),
//       providesTags: ["User"],
//     }),
//     blockUser: build.mutation<{message:string}, {userId:string}>({
//       query: ({userId}) => ({ url: `/admin/users/${userId}/block`, method: "PATCH" }),
//       invalidatesTags: ["User"],
//     }),
//     unblockUser: build.mutation<{message:string}, {userId:string}>({
//       query: ({userId}) => ({ url: `/admin/users/${userId}/unblock`, method: "PATCH" }),
//       invalidatesTags: ["User"],
//     }),
//   }),
// });




export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getWallet: build.query<{ balance: number }, void>({
      query: () => "/user/wallet",
      providesTags: ["Wallet"],
    }),
    getTransactions: build.query<any[], void>({
      query: () => "/user/transactions",
      providesTags: ["Transaction"],
    }),
  }),
});

export const { useGetWalletQuery, useGetTransactionsQuery } = userApi;

