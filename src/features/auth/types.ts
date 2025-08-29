/* eslint-disable @typescript-eslint/no-explicit-any */
export type TRole = "USER" | "AGENT" | "ADMIN";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: TRole;
  status?: "ACTIVE" | "BLOCKED" | "PENDING"; 
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginReq {
  user: any;
  refreshToken: any;
  accessToken: any;
  email: string;
  password: string;
}

export interface LoginRes {
  token: any;
  data: any;
  accessToken: string;
  refreshToken?: string;
  user: IUser;
  success: true;
}

export interface RegisterReq {
  name: string;
  email: string;
  phone: string;
  password: string;
  role:  "USER" | "AGENT" | "ADMIN";
}

export interface MeRes {
  user: IUser;
}
