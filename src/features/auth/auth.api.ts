
import { baseApi } from "@/redux/api/baseApi";
import type { LoginReq, LoginRes, MeRes, RegisterReq } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRes, LoginReq>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["AUTH"], 
    }),

    register: build.mutation<{ message: string }, RegisterReq>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["AUTH"],
    }),

    me: build.query<MeRes, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET", 
      }),
      providesTags: ["AUTH"],
    }),

    logout: build.mutation<{ message: string }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["AUTH"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useMeQuery,
  useLogoutMutation,
} = authApi;
