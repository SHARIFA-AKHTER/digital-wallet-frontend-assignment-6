import { useAppSelector } from "@/redux/store";


export const useUserRole = () => {
  const { user } = useAppSelector((state) => state.auth);

  const role = user?.role

  const isAdmin = role === "ADMIN";
  const isAgent = role === "AGENT";
  const isUser = role === "USER";

  return { user, role, isAdmin, isAgent, isUser };
};