/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetAgentCommissionsQuery, useGetTransactionsQuery } from "../transaction/transactions.api";


const AgentDashboard: React.FC = () => {
  const { data: transactions } = useGetTransactionsQuery();
  console.log("Transactions data:", transactions);
  const { data: commissions } = useGetAgentCommissionsQuery();

  const totalCommission = commissions?.reduce((sum: any, txn: { commission: any; }) => sum + (txn.commission || 0), 0) || 0;
   console.log("Transactions data:", transactions);
  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-indigo-600">Agent Dashboard</h1>

      {/* Transaction List */}
      <div className="bg-white p-6 rounded shadow overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Transaction History</h2>
        <table className="min-w-full bg-white border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2 text-left">To User</th>
              <th className="border px-3 py-2 text-right">Amount</th>
              <th className="border px-3 py-2 text-left">Type</th>
              <th className="border px-3 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions?.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-6 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            ) : (
              transactions?.map((txn: { _id: React.Key | null | undefined; toUser: any; amount: number; type: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; createdAt: string | number | Date; }) => (
                <tr key={txn._id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{txn.toUser || "N/A"}</td>
                  <td className="border px-3 py-2 text-right">৳{txn.amount.toFixed(2)}</td>
                  <td className="border px-3 py-2">{txn.type}</td>
                  <td className="border px-3 py-2">{txn.createdAt ? new Date(txn.createdAt).toLocaleDateString() : "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Agent Commission */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Agent Commission</h2>
        <p className="text-lg text-green-700 mb-4">
          💰 Total Commission Earned: <strong>৳{totalCommission?.toFixed(2)}</strong>
        </p>
        <table className="min-w-full bg-white border rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">To User</th>
              <th className="border px-3 py-2 text-right">Amount</th>
              <th className="border px-3 py-2 text-right">Commission</th>
              <th className="border px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {commissions?.map((txn: { _id: React.Key | null | undefined; toUser: any; amount: number; commission: number; createdAt: string | number | Date; }) => (
              <tr key={txn._id} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{txn.toUser || "N/A"}</td>
                <td className="border px-3 py-2 text-right">৳{txn.amount.toFixed(2)}</td>
                <td className="border px-3 py-2 text-right">৳{txn.commission.toFixed(2)}</td>
                <td className="border px-3 py-2">{txn.createdAt ? new Date(txn.createdAt).toLocaleDateString() : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentDashboard;

