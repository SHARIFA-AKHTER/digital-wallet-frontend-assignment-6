/* eslint-disable @typescript-eslint/no-explicit-any */

import axiosInstance from "@/lib/axios";

export const axiosBaseQuery =
  (): any =>
  async ({ url, method, body }: { url: string; method: string; body?: any }) => {
    try {
      console.log("➡️ API CALL:", method, url);
      const result = await axiosInstance.request({ url, method, data: body });
      return { data: result.data };
    } catch (axiosError: any) {
      console.log("➡️ API CALL:", method, url);
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
        },
      };
    }
  };
