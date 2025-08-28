
import { useGetTransactionsQuery } from "@/features/user/users.api";
import TransactionCard from "./TransactionCard";
import type { Key } from "react";

const TransactionList = () => {
  const { data: transactions = [], isLoading } = useGetTransactionsQuery();

  if (isLoading) {
    return (
      <div className="text-center py-6 text-gray-600">
        Loading transactions...
      </div>
    );
  }

  if (transactions.length === 0) {
    return <p className="text-gray-500 text-center">No transactions found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-6 text-center sm:text-left">
        📄 Transaction History
      </h2>

      {/* Mobile / Tablet view */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {transactions.map((txn) => (
          <TransactionCard
            key={txn._id as Key}
            type={capitalizeType(txn.type)}
            amount={txn.amount}
            status={capitalizeStatus(txn.status)}
            sender={txn.fromUser}
            receiver={txn.toUser}
            createdAt={txn.createdAt}
          />
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden lg:block overflow-x-auto mt-6">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-indigo-100 text-gray-800">
            <tr>
              <th className="py-3 px-5 text-left">Type</th>
              <th className="py-3 px-5 text-left">Amount</th>
              <th className="py-3 px-5 text-left">Status</th>
              <th className="py-3 px-5 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {transactions.map((txn) => (
              <tr key={txn._id as Key} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-5 capitalize">{capitalizeType(txn.type)}</td>
                <td className="py-3 px-5">৳{txn.amount.toFixed(2)}</td>
                <td className="py-3 px-5">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                      capitalizeStatus(txn.status) === "Completed"
                        ? "bg-green-100 text-green-700"
                        : capitalizeStatus(txn.status) === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {capitalizeStatus(txn.status)}
                  </span>
                </td>
                <td className="py-3 px-5">{new Date(txn.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Capitalize helpers
const capitalizeType = (
  type: string
): "Send" | "CashIn" | "CashOut" | "Withdraw" | "Add" => {
  switch (type.toLowerCase()) {
    case "send":
      return "Send";
    case "cashin":
    case "cash-in":
      return "CashIn";
    case "cashout":
    case "cash-out":
      return "CashOut";
    case "add":
      return "Add";
    case "withdraw":
      return "Withdraw";
    default:
      return "Send";
  }
};

const capitalizeStatus = (
  status: string
): "Pending" | "Completed" | "Reversed" => {
  switch (status.toLowerCase()) {
    case "pending":
      return "Pending";
    case "completed":
      return "Completed";
    case "reversed":
      return "Reversed";
    default:
      return "Pending";
  }
};

export default TransactionList;
