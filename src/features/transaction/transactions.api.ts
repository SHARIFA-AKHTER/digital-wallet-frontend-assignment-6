/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


export type TxFilters = { page?:number; limit?:number; type?:string; from?:string; to?:string; min?:number; max?:number; q?:string };

export const transactionsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    transactions: build.query<{data:any[]; meta:{page:number; limit:number; total:number}}, TxFilters>({
      query: (params) => ({ url: "/transactions", params }),
      providesTags: ["Transaction"],
    }),
  }),
});
export const { useTransactionsQuery } = transactionsApi;
