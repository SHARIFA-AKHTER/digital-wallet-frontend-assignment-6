// import {
//   useGetAgentsQuery,
//   useGetDashboardStatsQuery,
//   useGetUsersQuery,
//   useToggleAgentStatusMutation,
//   useToggleUserStatusMutation,
// } from "@/features/admin/admin.api";
// import { useGetTransactionsQuery } from "@/features/user/users.api";

// const AdminDashboard = () => {
//   const { data: stats, isLoading: statsLoading } = useGetDashboardStatsQuery();
//   const { data: users } = useGetUsersQuery();
//   const [toggleUserStatus] = useToggleUserStatusMutation();
//   const { data: agents } = useGetAgentsQuery();
//   const [toggleAgentStatus] = useToggleAgentStatusMutation();
//   const { data: transactions } = useGetTransactionsQuery();

//   const handleBlockUser = (userId: string, block: boolean) => {
//     toggleUserStatus({ userId, block });
//   };

//   const handleApproveAgent = (agentId: string, approve: boolean) => {
//     toggleAgentStatus({ agentId, approve });
//   };

//   if (statsLoading) return <p>Loading dashboard...</p>;

//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

//       {/* Overview */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <div className="p-4 bg-indigo-100 rounded shadow text-center">
//           <h2 className="font-semibold">Total Users</h2>
//           <p className="text-xl">{stats?.totalUsers}</p>
//         </div>
//         <div className="p-4 bg-green-100 rounded shadow text-center">
//           <h2 className="font-semibold">Total Agents</h2>
//           <p className="text-xl">{stats?.totalAgents}</p>
//         </div>
//         <div className="p-4 bg-yellow-100 rounded shadow text-center">
//           <h2 className="font-semibold">Transactions</h2>
//           <p className="text-xl">{stats?.totalTransactions}</p>
//         </div>
//         <div className="p-4 bg-purple-100 rounded shadow text-center">
//           <h2 className="font-semibold">Total Volume</h2>
//           <p className="text-xl">৳{stats?.totalVolume}</p>
//         </div>
//       </div>

//       {/* Users Management */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Manage Users</h2>
//         <table className="min-w-full bg-white border rounded shadow">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-3 py-2">Name</th>
//               <th className="border px-3 py-2">Email</th>
//               <th className="border px-3 py-2">Status</th>
//               <th className="border px-3 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users?.map((user) => (
//               <tr key={user._id}>
//                 <td className="border px-3 py-2">{user.name}</td>
//                 <td className="border px-3 py-2">{user.email}</td>
//                 <td className="border px-3 py-2">
//                   {user.blocked ? "Blocked" : "Active"}
//                 </td>
//                 <td className="border px-3 py-2">
//                   <button
//                     onClick={() => handleBlockUser(user._id, !user.blocked)}
//                     className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                   >
//                     {user.blocked ? "Unblock" : "Block"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Agents Management */}
//       <section className="mb-8">
//         <h2 className="text-xl font-bold mb-4">Manage Agents</h2>
//         <table className="min-w-full bg-white border rounded shadow">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="border px-3 py-2">Name</th>
//               <th className="border px-3 py-2">Email</th>
//               <th className="border px-3 py-2">Status</th>
//               <th className="border px-3 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {agents?.map((agent) => (
//               <tr key={agent._id}>
//                 <td className="border px-3 py-2">{agent.name}</td>
//                 <td className="border px-3 py-2">{agent.email}</td>
//                 <td className="border px-3 py-2">
//                   {agent.approved ? "Approved" : "Pending"}
//                 </td>
//                 <td className="border px-3 py-2">
//                   <button
//                     onClick={() =>
//                       handleApproveAgent(agent._id, !agent.approved)
//                     }
//                     className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     {agent.approved ? "Suspend" : "Approve"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Transactions */}
//       <section>
//         <h2 className="text-xl font-bold mb-4">All Transactions</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded shadow">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border px-3 py-2">User</th>
//                 <th className="border px-3 py-2">Amount</th>
//                 <th className="border px-3 py-2">Type</th>
//                 <th className="border px-3 py-2">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions?.map((txn) => (
//                 <tr key={txn._id} className="hover:bg-gray-50">
//                   <td className="border px-3 py-2">{txn.userId}</td>
//                   <td className="border px-3 py-2">৳{txn.amount}</td>
//                   <td className="border px-3 py-2">{txn.type}</td>
//                   <td className="border px-3 py-2">
//                     {new Date(txn.createdAt).toLocaleDateString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;



import { useUserRole } from "@/hooks/useUserRole";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const { isAdmin } = useUserRole();

  if (!isAdmin) {
    return <div className="text-red-600">Unauthorized</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome Admin</h1>
      {/* Only admin can see this part */}
      <p>Here you can manage users, transactions, wallets...</p>

    
    </div>
  );
};

export default AdminDashboard;