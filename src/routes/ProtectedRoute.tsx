
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

// import { Navigate, useLocation } from "react-router-dom";
// import { useUserRole } from "@/hooks/useUserRole";
// import type { JSX } from "react";

// type ProtectedRouteProps = {
//   children: JSX.Element;
//   allowedRoles: Array<"USER" | "AGENT" | "ADMIN"| undefined>;
// };

// export const PrivateRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
//   const { role } = useUserRole();
//  const location = useLocation();
//   if (!allowedRoles.includes(role)) {
   
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   return children;
// };

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  console.log("PrivateRoute authUser:", localStorage.getItem("authUser"));

  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
