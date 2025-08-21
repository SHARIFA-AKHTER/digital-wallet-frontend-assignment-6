import { removeToken, setToken } from "@/utils/token";
import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "AGENT" | "ADMIN" ;
};
type AuthState = { accessToken: string | null; user: User | null };

const initialState: AuthState = { accessToken: null, user: null };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      s,
      { payload }: { payload: { accessToken: string; user: User } }
    ) => {
      s.accessToken = payload.accessToken;
      s.user = payload.user;
      setToken(payload.accessToken);
    },
    clearAuth: (s) => {
      s.accessToken = null;
      s.user = null;
      removeToken();
    },
  },
});

export const { setCredentials, clearAuth } = slice.actions;
export default slice.reducer;
