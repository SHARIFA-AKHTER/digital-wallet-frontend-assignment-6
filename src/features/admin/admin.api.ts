/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/api/baseApi";
import type {
  AdminOverview,
  ManageUserRes,
  IAgent,
  AdminTransaction,
  SystemSettings,
} from "./types";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Overview
    getOverview: build.query<AdminOverview, void>({
      query: () => ({
        url: "/admin/overview",
        method: "GET",
      }),
      providesTags: ["OVERVIEW"],
    }),

    // Users
    getUsers: build.query<ManageUserRes[], void>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    toggleUserStatus: build.mutation<ManageUserRes, string>({
      query: (userId) => ({
        url: `/admin/users/${userId}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),

    // Agents
    getAgents: build.query<IAgent[], void>({
      query: () => ({
        url: "/admin/agents",
        method: "GET",
      }),
      providesTags: ["AGENT"],
    }),

    toggleAgentStatus: build.mutation<IAgent, string>({
      query: (userId) => ({
        url: `/admin/agents/${userId}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["AGENT"],
    }),

    // Transactions
    getTransactions: build.query<AdminTransaction[], void>({
      query: () => ({
        url: "/admin/transactions",
        method: "GET",
      }),
      providesTags: ["TRANSACTION"],
    }),


    getSettings: build.query<SystemSettings, void>({
      query: () => ({
        url: "/admin/settings",
        method: "GET",
      }),
      providesTags: ["SETTINGS"],
    }),

    updateSettings: build.mutation<SystemSettings, SystemSettings>({
      query: (body) => ({
        url: "/admin/settings-update",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["SETTINGS"], 
    }),

    // Profile
    getProfile: build.query<any, void>({
      query: () => ({
        url: "/admin/profile",
        method: "GET",
      }),
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
