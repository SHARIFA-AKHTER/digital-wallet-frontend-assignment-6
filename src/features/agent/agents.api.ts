/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


export const agentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    agentOverview: build.query<any, void>({ query: () => "/agent/overview" }),
    addMoneyToUser: build.mutation<{message:string}, {userId:string; amount:number}>({
      query: (body) => ({ url: "/agent/add-money", method: "POST", body }),
      invalidatesTags: ["Wallet","Transaction"],
    }),
    withdrawFromUser: build.mutation<{message:string}, {userId:string; amount:number}>({
      query: (body) => ({ url: "/agent/withdraw-user", method: "POST", body }),
      invalidatesTags: ["Wallet","Transaction"],
    }),
    agentTransactions: build.query<any, {page?:number;limit?:number}>({
      query: (params) => ({ url: "/agent/transactions", params }),
      providesTags: ["Transaction"],
    }),
  }),
});
