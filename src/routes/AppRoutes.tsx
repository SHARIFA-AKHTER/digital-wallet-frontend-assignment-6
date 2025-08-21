// import MainLayout from "@/components/layout/MainLayout";
// import { Route, Routes } from "react-router-dom";



// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* 🔓 Public Layout */}
//       <Route element={<MainLayout />}>
//         {/* <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/unauthorized" element={<Unauthorized />} /> */}
//         {/* <Route path="/wallet" element={<WalletPage />} />
//         <Route path="/transactions" element={<TransactionList />} /> */}
//       </Route>

//       {/* 🔒 USER DASHBOARD */}
//       {/* <Route
//         path="/dashboard/user"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["USER"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<UserDashboard />} />
//         <Route path="wallet" element={<WalletPage />} />
//         <Route path="transactions" element={<TransactionList />} />
//       </Route> */}

//       {/* 🔒 ADMIN DASHBOARD */}
//       {/* <Route
//         path="/dashboard/admin"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["ADMIN"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<AdminDashboard />} />
//         <Route path="wallet" element={<WalletPage />} />
//         <Route path="transactions" element={<TransactionList />} />
//         <Route path="users" element={<UserList />} />
//         <Route path="settings" element={<SettingsPage />} />
//         <Route path="agent-approval" element={<AgentApproval />} />
//       </Route> */}

//       {/* 🔒 AGENT DASHBOARD */}
//       {/* <Route
//         path="/dashboard/agent"
//         element={
//           <PrivateRoute>
//             <RoleGuard allowedRoles={["AGENT"]}>
//               <DashboardLayout />
//             </RoleGuard>
//           </PrivateRoute>
//         }
//       >
//         <Route index element={<AgentDashboard />} />
//         <Route path="wallet" element={<WalletPage />} />
//         <Route path="transactions" element={<TransactionList />} />
//         <Route path="agent-commission" element={<AgentCommission />} />
//       </Route> */}
//     </Routes>
//   );
// };

// export default AppRoutes;


import { Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import About from "@/pages/public/About";
import Features from "@/pages/public/Features";
import Contact from "@/pages/public/Contact";
import Home from "@/pages/public/Home";
import Pricing from "@/pages/public/Pricing";
import FAQ from "@/pages/public/FAQ";




const AppRoutes = () => {
  return (
    <Routes>
      {/* 🔓 Public Layout */}
      <Route
       path="/"
      element={<MainLayout />}
      
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
       
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
           
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} /> */}

        {/* Optional Public Wallet/Transaction Pages */}
        {/* <Route path="/wallet" element={<WalletPage />} />
        <Route path="/transactions" element={<TransactionList />} /> */}
      </Route>

      {/* 🔒 USER DASHBOARD */}
      {/* <Route
        path="/dashboard/user"
        element={
          <PrivateRoute>
            <RoleGuard allowedRoles={["USER"]}>
              <DashboardLayout />
            </RoleGuard>
          </PrivateRoute>
        }
      >
        <Route index element={<UserDashboard />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="transactions" element={<TransactionList />} />
      </Route> */}


    </Routes>
  );
};

export default AppRoutes;
