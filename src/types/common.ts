export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

export interface SuccessRes {
  message: string;
}

export type DateRange = {
  from: string;
  to: string;
};
