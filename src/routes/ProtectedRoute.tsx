
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

// src/components/common/Protected.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/app/store";

type Props = { children: React.ReactNode; allow?: Array<"USER"|"AGENT"|"ADMIN"> };

export default function Protected({ children, allow }: Props) {
  const { user, accessToken } = useAppSelector(s => s.auth);
  const location = useLocation();

  if (!accessToken) return <Navigate to="/login" state={{from: location}} replace />;

  if (allow && user?.role && !allow.includes(user.role)) {
    // role mismatch → redirect to own dashboard root
    const target = `/dashboard/${user.role.toLowerCase()}`;
    return <Navigate to={target} replace />;
  }
  return <>{children}</>;
}
