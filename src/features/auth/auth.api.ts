
import { baseApi } from "../../redux/api/baseApi";
import type { LoginReq, LoginRes, MeRes, RegisterReq } from "./types";


export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRes, LoginReq>({
      query: (body) => ({ url: "/auth/login", method: "POST", body }),
      invalidatesTags: ["Auth"],
    }),
    register: build.mutation<{ message: string }, RegisterReq>({
      query: (body) => ({ url: "/auth/register", method: "POST", body }),
    }),
    me: build.query<MeRes, void>({
      query: () => ({ url: "/auth/me" }),
      providesTags: ["Auth"],
    }),
    logout: build.mutation<{ message:string }, void>({
      query: () => ({ url: "/auth/logout", method: "POST" }),
      invalidatesTags: ["Auth"],
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useMeQuery, useLogoutMutation } = authApi;
