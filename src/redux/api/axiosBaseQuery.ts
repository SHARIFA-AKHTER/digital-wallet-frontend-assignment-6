/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// import axiosInstance from "@/lib/axios";


// export const axiosBaseQuery =
//   (): any =>
//   async ({
//     url,
//     method,
//     body,
//     params,
//     headers,
//   }: {
//     url: string;
//     method: "get" | "post" | "put" | "patch" | "delete";
//     body?: any;
//     params?: any;
//     headers?: Record<string, string>;
//   }) => {
//     try {
//       const result = await axiosInstance.request({
//         url,
//         method,
//         data: body,     
//         params,        
//         headers, 
//         withCredentials: true,        
//       });

//       return { data: result.data };
//     } catch (axiosError: any) {
//       return {
//         error: {
//           status: axiosError.response?.status,
//           data: axiosError.response?.data || axiosError.message,
//         },
//       };
//     }
//   };


import { createApi } from "@reduxjs/toolkit/query/react";
import axiosInstance from "@/lib/axios";

export const axiosBaseQuery =
  (): any =>
  async ({ url, method, body, params, headers }: any) => {
    try {
      const result = await axiosInstance.request({
        url,
        method,
        data: body,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError: any) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data || axiosError.message,
        },
      };
    }
  };

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["AUTH", "WALLET", "TRANSACTION"],
  endpoints: () => ({}),
});
