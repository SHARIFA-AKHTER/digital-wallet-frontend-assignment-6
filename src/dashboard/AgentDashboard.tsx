// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import CashInCashOut from "@/pages/public/CashInCashOut";

// import Profile from "@/pages/public/Profile";
// import { useGetTransactionsQuery, useGetWalletQuery } from "@/features/user/users.api";

// export default function AgentDashboard() {
//   const { data: wallet } = useGetWalletQuery();
//   const { data: transactions } = useGetTransactionsQuery();

//   return (
//     <div className="p-6 space-y-6">
//       {/* Wallet Summary */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Wallet Overview</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-700">
//             Balance: <span className="font-bold">{wallet?.balance || 0}৳</span>
//           </p>
//         </CardContent>
//       </Card>

//       {/* Add / Withdraw Money */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Add / Withdraw Money</CardTitle>
//         </CardHeader>
//         <CardContent className="flex gap-4 flex-wrap">
//           <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//             Add Money
//           </button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
//             Withdraw Money
//           </button>
//         </CardContent>
//       </Card>

//       {/* Transaction List */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Transactions (Your Activity)</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-2 max-h-64 overflow-y-auto">
//           {transactions?.length ? (
//             transactions.map((tx: any) => (
//               <div
//                 key={tx._id}
//                 className="flex justify-between border-b py-2 text-sm"
//               >
//                 <span>{tx.type}</span>
//                 <span>{tx.amount}৳</span>
//                 <span className="text-gray-500">{new Date(tx.createdAt).toLocaleString()}</span>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No transactions yet.</p>
//           )}
//         </CardContent>
//       </Card>

//       {/* Commission History (Optional) */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Commission History</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-gray-500">Coming soon...</p>
//         </CardContent>
//       </Card>

//       {/* Profile Update */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Profile Update</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Profile />
//         </CardContent>
//       </Card>
//     </div>
//   );
// }





const AgentDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Agent Dashboard</h1>
      <p>Cash-In, Cash-Out and Commission History here.</p>
     <CashInCashOut></CashInCashOut>
    </div>
    
  );
};

export default AgentDashboard;
