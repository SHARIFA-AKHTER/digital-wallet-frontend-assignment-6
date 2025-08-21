
// import { createApi } from '@reduxjs/toolkit/query/react';
// import axiosBaseQuery from './axiosBaseQuery';


// export const baseApi = createApi({
//     reducerPath: 'baseApi',
//     baseQuery: axiosBaseQuery(),

//     tagTypes: ["USER","AGENT", "ADMIN"],
//     endpoints: ()=> ({}),
// })

// src/lib/baseApi.ts  (fetchBaseQuery ব্যবহার)
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "@/utils/token";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Auth","Wallet","Transaction","User","Agent"],
  endpoints: () => ({}),
});
