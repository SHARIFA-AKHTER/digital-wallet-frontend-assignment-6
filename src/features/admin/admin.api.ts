/* eslint-disable @typescript-eslint/no-explicit-any */
// import { baseApi } from "@/redux/api/baseApi";
// import type { Transaction } from "../transaction/types";
// import type { Agent } from "node:https";
// import type { UserProfile } from "../user/userTypes";


// export const adminApi = baseApi.injectEndpoints({
//   endpoints: (build) => ({
//     // ✅ Get dashboard stats
//     getDashboardStats: build.query<{
//       totalUsers: number;
//       totalAgents: number;
//       totalTransactions: number;
//       totalVolume: number;
//     }, void>({
//       query: () => "/admin/dashboard",
//       providesTags: ["ADMIN"],
//     }),

//     // ✅ Get all users
//     getUsers: build.query<UserProfile[], void>({
//       query: () => "/admin/users",
//       providesTags: ["USER"],
//     }),

//     // ✅ Block/Unblock user
//     toggleUserStatus: build.mutation<UserProfile, { userId: string; block: boolean }>({
//       query: ({ userId, block }) => ({
//         url: `/admin/users/${userId}/block`,
//         method: "PATCH",
//         body: { block },
//       }),
//       invalidatesTags: ["AGENT", "ADMIN"],
//     }),

//     // ✅ Get all agents
//     getAgents: build.query<Agent[], void>({
//       query: () => "/admin/agents",
//       providesTags: ["AGENT"],
//     }),

//     // ✅ Approve/Suspend agent
//     toggleAgentStatus: build.mutation<Agent, { agentId: string; approve: boolean }>({
//       query: ({ agentId, approve }) => ({
//         url: `/admin/agents/${agentId}`,
//         method: "PATCH",
//         body: { approve },
//       }),
//       invalidatesTags: ["AGENT", "ADMIN"],
//     }),

//     // ✅ Get all transactions
//     getTransactions: build.query<Transaction[], void>({
//       query: () => "/admin/transactions",
//       providesTags: ["TRANSACTION"],
//     }),
//   }),
// });

// export const {
//   useGetDashboardStatsQuery,
//   useGetUsersQuery,
//   useToggleUserStatusMutation,
//   useGetAgentsQuery,
//   useToggleAgentStatusMutation,
//   useGetTransactionsQuery,
// } = adminApi;

import { baseApi } from "@/redux/api/baseApi";
import type { AdminOverview, ManageUserRes, IAgent, AdminTransaction, SystemSettings } from "./types";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOverview: build.query<AdminOverview, void>({
      query: () => "/admin/overview",
      providesTags: ["OVERVIEW"],
    }),

    getUsers: build.query<ManageUserRes[], void>({
      query: () => "/admin/users",
      providesTags: ["USER"],
    }),

    toggleUserStatus: build.mutation<ManageUserRes, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),

    getAgents: build.query<IAgent[], void>({
      query: () => "/admin/agents",
      providesTags: ["AGENT"],
    }),

    toggleAgentStatus: build.mutation<IAgent, string>({
      query: (agentId) => ({
        url: `/admin/agents/${agentId}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["AGENT"],
    }),

    getTransactions: build.query<AdminTransaction[], void>({
      query: () => "/admin/transactions",
      providesTags: ["TRANSACTION"],
    }),

    getSettings: build.query<SystemSettings, void>({
      query: () => "/admin/settings",
      providesTags: ["SETTINGS"],
    }),

    updateSettings: build.mutation<SystemSettings, SystemSettings>({
      query: (body) => ({
        url: "/admin/settings",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ADMIN"],
    }),

    getProfile: build.query<any, void>({
      query: () => "/admin/profile",
    }),
    
    updateProfile: build.mutation<any, any>({
      query: (body) => ({
        url: "/admin/profile",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetOverviewQuery,
  useGetUsersQuery,
  useToggleUserStatusMutation,
  useGetAgentsQuery,
  useToggleAgentStatusMutation,
  useGetTransactionsQuery,
  useGetSettingsQuery,
  useUpdateSettingsMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = adminApi;
