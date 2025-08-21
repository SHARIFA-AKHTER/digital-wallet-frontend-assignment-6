
// import { useAuth } from "@/Context/AuthContext";
// import { Navigate, useLocation } from "react-router-dom";


// const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useUserRole } from "@/hooks/useUserRole";
import type { JSX } from "react";

type ProtectedRouteProps = {
  children: JSX.Element;
  allowedRoles: Array<"user" | "agent" | "admin">;
};

export const PrivateRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { role } = useUserRole();

  if (!allowedRoles.includes(role)) {
   
    return <Navigate to="/login" replace />;
  }

  return children;
};

