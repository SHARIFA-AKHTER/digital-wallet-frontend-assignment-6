import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from '@/Context/AuthContext';



interface RoleGuardProps {
  allowedRoles: Array<"USER" | "AGENT" | "ADMIN">;
  children: React.ReactNode;
}

const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RoleGuard;