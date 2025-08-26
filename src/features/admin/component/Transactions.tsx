import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";

interface ITransaction {
  _id: string;
  toUser?: string;
  amount: number;
  type?: string;
  fee?: number;
  createdAt?: string;
}

export default function Transactions() {
  const [txns, setTxns] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      const res = await axiosInstance.get("/transactions");
      setTxns(res.data?.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch transactions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  if (loading) return <p>Loading transactions...</p>;
  if (!txns.length) return <p>No transactions found.</p>;

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left text-gray-800">
        Transactions
      </h2>

      {/* Desktop & Tablet Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-sm md:text-base font-medium text-gray-700">
                User
              </th>
              <th className="px-3 py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Amount
              </th>
              <th className="px-3 hidden md:table-cell py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Type
              </th>
              <th className="px-3 hidden md:table-cell py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Fee
              </th>
              <th className="px-3 py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Date
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {txns.map((t) => (
              <tr key={t._id} className="hover:bg-gray-50 transition">
                <td className="px-3 py-2 text-sm md:text-base">{t.toUser || "N/A"}</td>
                <td className="px-3 py-2 text-sm md:text-base">{t.amount}</td>
                <td className="px-3 py-2 hidden md:table-cell text-sm md:text-base">{t.type}</td>
                <td className="px-3 py-2 hidden md:table-cell text-sm md:text-base">{t.fee || 0}</td>
                <td className="px-3 py-2 text-sm md:text-base">
                  {new Date(t.createdAt || "").toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden flex flex-col gap-4">
        {txns.map((t) => (
          <div
            key={t._id}
            className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition"
          >
            <p className="text-sm md:text-base">
              <span className="font-semibold">User:</span> {t.toUser || "N/A"}
            </p>
            <p className="text-sm md:text-base">
              <span className="font-semibold">Amount:</span> {t.amount}
            </p>
            {t.type && (
              <p className="text-sm md:text-base">
                <span className="font-semibold">Type:</span> {t.type}
              </p>
            )}
            {t.fee !== undefined && (
              <p className="text-sm md:text-base">
                <span className="font-semibold">Fee:</span> {t.fee || 0}
              </p>
            )}
            <p className="text-sm md:text-base">
              <span className="font-semibold">Date:</span>{" "}
              {new Date(t.createdAt || "").toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
