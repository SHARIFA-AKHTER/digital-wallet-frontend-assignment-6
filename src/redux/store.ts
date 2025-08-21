// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector,
  useDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import { baseApi } from "./api/baseApi";
import  authReducer  from '@/features/auth/auth.slice';


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,  // <-- register auth slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// TypeScript helpers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

