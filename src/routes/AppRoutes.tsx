
import { Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";

import Home from "@/pages/public/Home";
import About from "@/pages/public/About";
import Features from "@/pages/public/Features";
import Contact from "@/pages/public/Contact";
import Pricing from "@/pages/public/Pricing";
import FAQ from "@/pages/public/FAQ";
import Login from "@/auth/Login";
import Register from "@/auth/Register";
import PrivateRoute  from "./ProtectedRoute";
import RoleGuard from "@/routes/RoleGuard";
import UserDashboard from "@/dashboard/UserDashboard";
import WalletPage from "@/pages/public/WalletPage";
import Unauthorized from "@/auth/Unauthorized";
import SendMoneyPage from "@/pages/public/SendMoneyPage";
import TransactionList from "@/transactions/TransactionList";
import Profile from "@/pages/public/Profile";
import AgentDashboard from "@/dashboard/AgentDashboard";
import AgentCommission from "@/features/agent/AgentCommission";
import AdminDashboard from "@/dashboard/AdminDashboard";
import ManageUsers from "@/features/admin/component/ManageUsers";
import ManageAgents from "@/features/admin/component/ManageAgents";
import AdminSettings from "@/features/admin/component/AdminSettings";
import AdminProfile from "@/features/admin/component/AdminProfile";
const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      {/* 🔒 USER DASHBOARD */}
      <Route
        path="/dashboard/user"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["USER"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        {/* Nested Routes inside DashboardLayout */}

        <Route index element={<UserDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="send-money" element={<SendMoneyPage />} />

        <Route path="transactions" element={<TransactionList />} />
        <Route path="profile" element={<Profile />} />
      </Route>

        {/* 🔒 AGENT DASHBOARD */}
      <Route
        path="/dashboard/agent"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["AGENT"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AgentDashboard />} />
         <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
          <Route path="send-money" element={<SendMoneyPage />} />
         <Route path="agent-commission" element={<AgentCommission />} />
        <Route path="profile" element={<Profile />} />
       
      </Route>
         {/* 🔒 Admin DASHBOARD */}
      <Route
        path="/dashboard/admin"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["ADMIN"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<ManageUsers />} />
        <Route path="agents" element={<ManageAgents />} />
        <Route path="transactions" element={<TransactionList />} />
        <Route path="settings" element={<AdminSettings />} />
        <Route path="profile" element={<AdminProfile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
