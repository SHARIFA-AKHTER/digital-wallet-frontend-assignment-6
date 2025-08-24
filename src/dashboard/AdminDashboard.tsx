/* eslint-disable @typescript-eslint/no-explicit-any */



import { useUserRole } from "@/hooks/useUserRole";

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



// const AdminDashboard = () => {
//   const { data, isLoading, isError } = useGetOverviewQuery();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Error loading overview.</p>;
//   console.log("data");

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
//         🛠 Admin Dashboard Overview
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <div className="bg-white shadow p-4 rounded text-center">
//           <p className="text-sm text-gray-500">Total Users</p>
//           <p className="text-xl font-bold">{data?.totalUsers}</p>
//         </div>
//         <div className="bg-white shadow p-4 rounded text-center">
//           <p className="text-sm text-gray-500">Total Agents</p>
//           <p className="text-xl font-bold">{data?.totalAgents}</p>
//         </div>
//         <div className="bg-white shadow p-4 rounded text-center">
//           <p className="text-sm text-gray-500">Transactions</p>
//           <p className="text-xl font-bold">{data?.totalTransactions}</p>
//         </div>
//         <div className="bg-white shadow p-4 rounded text-center">
//           <p className="text-sm text-gray-500">Total Volume</p>
//           <p className="text-xl font-bold">৳{data?.totalVolume}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


