// import { createApi } from '@reduxjs/toolkit/query/react';
// import axiosBaseQuery from './axiosBaseQuery';

// export const baseApi = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: axiosBaseQuery(),

//     tagTypes: ["USER","AGENT", "ADMIN"],
//     endpoints: ()=> ({}),
// })

// import { getToken } from "@/utils/token";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_URL,
//     prepareHeaders: (headers) => {
//       const token = getToken();
//       if (token) headers.set("authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   tagTypes: ["AUTH","WALLET","TRANSACTION","USER","AGENT", "ADMIN"],
//   endpoints: () => ({}),
// });

import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const baseApi = createApi({
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    "AUTH",
    "OVERVIEW",
    "SETTINGS",
    "WALLET",
    "TRANSACTION",
    "USER",
    "AGENT",
    "ADMIN",
  ],
  endpoints: () => ({}),
});
