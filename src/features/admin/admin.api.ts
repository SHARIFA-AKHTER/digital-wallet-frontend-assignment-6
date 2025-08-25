/* eslint-disable @typescript-eslint/no-explicit-any */


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
      query: (userId) => ({
        url: `/admin/agents/${userId}/toggle`,
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
