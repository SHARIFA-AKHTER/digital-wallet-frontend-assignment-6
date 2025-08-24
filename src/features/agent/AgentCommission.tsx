import { useEffect, useState } from "react";
import axios from "axios";
import type { ITransaction } from "@/features/transaction/types";

const AgentCommission: React.FC = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [commissions, setCommissions] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const storedUser = localStorage.getItem("authUser");
      if (!storedUser) {
        console.log("❌ No user found in localStorage");
        setLoading(false);
        return;
      }

      const { token } = JSON.parse(storedUser);

      try {
        const [txnRes, commRes] = await Promise.all([
          axios.get("http://localhost:3000/api/v1/transactions/me", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get("http://localhost:3000/api/v1/transactions/agent-commissions", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setTransactions(txnRes.data?.data || []);
        setCommissions(commRes.data?.data || []);
      } catch (error) {
        console.error("❌ Failed to fetch agent data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalCommission = commissions.reduce(
    (sum, txn) => sum + (txn.commission || 0),
    0
  );

  if (loading) {
    return <div className="text-center py-6 text-gray-600">Loading...</div>;
  }

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-indigo-600">
        Agent Dashboard
      </h1>

      {/* Transaction History */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">
          Transaction History
        </h2>

        {/* Mobile / Tablet cards */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {transactions.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No transactions found.</p>
          ) : (
            transactions.map((txn) => (
              <div key={txn._id} className="border rounded shadow p-4 bg-white">
                <p><strong>To User:</strong> {txn.toUser || "N/A"}</p>
                <p><strong>Amount:</strong> ৳{txn.amount.toFixed(2)}</p>
                <p><strong>Type:</strong> {txn.type}</p>
                <p><strong>Date:</strong> {txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "N/A"}</p>
              </div>
            ))
          )}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
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
              {transactions.map((txn) => (
                <tr key={txn._id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{txn.toUser || "N/A"}</td>
                  <td className="border px-3 py-2 text-right">৳{txn.amount.toFixed(2)}</td>
                  <td className="border px-3 py-2">{txn.type}</td>
                  <td className="border px-3 py-2">
                    {txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Agent Commission */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">
          Agent Commission
        </h2>

        <p className="text-lg text-green-700 mb-4">
          💰 Total Commission Earned: <strong>৳{totalCommission.toFixed(2)}</strong>
        </p>

        {/* Mobile / Tablet cards */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {commissions.map((txn) => (
            <div key={txn._id} className="border rounded shadow p-4 bg-white">
              <p><strong>To User:</strong> {txn.toUser || "N/A"}</p>
              <p><strong>Amount:</strong> ৳{txn.amount.toFixed(2)}</p>
              <p><strong>Commission:</strong> ৳{(txn.commission ?? 0).toFixed(2)}</p>
              <p><strong>Date:</strong> {txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "N/A"}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden lg:block overflow-x-auto">
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
              {commissions.map((txn) => (
                <tr key={txn._id} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{txn.toUser || "N/A"}</td>
                  <td className="border px-3 py-2 text-right">৳{txn.amount.toFixed(2)}</td>
                  <td className="border px-3 py-2 text-right">৳{(txn.commission ?? 0).toFixed(2)}</td>
                  <td className="border px-3 py-2">{txn.createdAt ? new Date(txn.createdAt).toLocaleString() : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AgentCommission;
