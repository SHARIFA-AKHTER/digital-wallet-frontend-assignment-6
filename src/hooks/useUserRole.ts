// import { useAppSelector } from "@/redux/store";


// export const useUserRole = () => {
//   const { user } = useAppSelector((state) => state.auth);

//   const role = user?.role

//   const isAdmin = role === "ADMIN";
//   const isAgent = role === "AGENT";
//   const isUser = role === "USER";

//   return { user, role, isAdmin, isAgent, isUser };
// };

import { useAuth } from "@/Context/AuthContext";

export const useUserRole = () => {
  const { user } = useAuth();

  return {
    isUser: user?.role === "USER",
    isAdmin: user?.role === "ADMIN",
    isAgent: user?.role === "AGENT",
  };
};
