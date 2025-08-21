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
  email: string;
  password: string;
}

export interface LoginRes {
  accessToken: string;
  refreshToken?: string;
  user: IUser;
}

export interface RegisterReq {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "USER" | "AGENT";
}

export interface MeRes {
  user: IUser;
}
