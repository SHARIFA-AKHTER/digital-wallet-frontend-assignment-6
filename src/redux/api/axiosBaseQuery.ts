/* eslint-disable @typescript-eslint/no-explicit-any */

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
