
import { baseApi } from "@/redux/api/baseApi";
import type { IAgentListResponse } from "../admin/types";
import type { ITransactionListResponse } from "../transaction/types";


export const adminAgentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    listAgents: build.query<IAgentListResponse, {page?:number;limit?:number;q?:string;status?:string}>({
      query: (params) => ({ url: "/admin/agents", params }),
      providesTags: ["Agent"],
    }),
    approveAgent: build.mutation<{message:string}, {agentId:string}>({
      query: ({agentId}) => ({ url: `/admin/agents/${agentId}/approve`, method: "PATCH" }),
      invalidatesTags: ["Agent"],
    }),
    suspendAgent: build.mutation<{message:string}, {agentId:string}>({
      query: ({agentId}) => ({ url: `/admin/agents/${agentId}/suspend`, method: "PATCH" }),
      invalidatesTags: ["Agent"],
    }),
    allTransactions: build.query<ITransactionListResponse, {page?:number;limit?:number;type?:string;status?:string;from?:string;to?:string;min?:number;max?:number;q?:string}>({
      query: (params) => ({ url: "/admin/transactions", params }),
      providesTags: ["Transaction"],
    }),
  }),
});
