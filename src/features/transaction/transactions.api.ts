import { baseApi } from "@/redux/api/baseApi";
import type { Transaction } from "./types";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTransactions: build.query<Transaction[], void>({
      query: () => "/transactions", 
      providesTags: ["TRANSACTION"], 
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionApi;
