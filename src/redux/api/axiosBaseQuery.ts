/* eslint-disable @typescript-eslint/no-explicit-any */

// import axiosInstance from '@/lib/axios'
// import type { BaseQueryFn } from '@reduxjs/toolkit/query'

// import type { AxiosRequestConfig, AxiosError } from 'axios'

// const axiosBaseQuery =
//   (): BaseQueryFn<
//     {
//       url: string
//       method?: AxiosRequestConfig['method']
//       data?: AxiosRequestConfig['data']
//       params?: AxiosRequestConfig['params']
//       headers?: AxiosRequestConfig['headers']
//     },
//     unknown,
//     unknown
//   > =>
//   async ({ url, method, data, params, headers }) => {
//     try {
//       const result = await axiosInstance({
//         url: url,
//         method,
//         data,
//         params,
//         headers,
//       })
//       return { data: result.data }
//     } catch (axiosError) {
//       const err = axiosError as AxiosError
//       return {
//         error: {
//           status: err.response?.status,
//           data: err.response?.data || err.message,
//         },
//       }
//     }
//   }

//   export default axiosBaseQuery;



import axiosInstance from "@/lib/axios";

export const axiosBaseQuery =
  (): any =>
  async ({ url, method, body }: { url: string; method: string; body?: any }) => {
    try {
      // axios data = RTK body
      const result = await axiosInstance.request({ url, method, data: body });
      return { data: result.data };
    } catch (axiosError: any) {
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
