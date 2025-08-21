// src/features/auth/auth.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { setAccessToken, clearTokens } from "@/utils/token";

type User = { id:string; name:string; email:string; role:"USER"|"AGENT"|"ADMIN" }
type AuthState = { accessToken:string|null; user:User|null }

const initialState: AuthState = { accessToken: null, user: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (s, {payload}:{payload:{accessToken:string; user:User}}) => {
      s.accessToken = payload.accessToken;
      s.user = payload.user;
      setAccessToken(payload.accessToken);
    },
    clearAuth: (s) => { s.accessToken = null; s.user = null; clearTokens(); },
  },
});

export const { setCredentials, clearAuth } = slice.actions;
export default slice.reducer;
