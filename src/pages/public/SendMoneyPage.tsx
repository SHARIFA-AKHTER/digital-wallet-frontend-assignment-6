/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/pages/dashboard/SendMoneyPage.tsx
import { useState } from "react";
import { useSendMoneyMutation, useGetMyWalletQuery } from "@/features/wallet/wallet.api";
import { useAuth } from "@/Context/AuthContext";
import { toast } from "sonner";

export default function SendMoneyPage() {
  const {  user: _user } = useAuth();
  const { data: walletData, isLoading: walletLoading } = useGetMyWalletQuery();
  const [sendMoney, { isLoading }] = useSendMoneyMutation();

  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  const handleSendMoney = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiverId || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await sendMoney({ receiverId, amount: Number(amount) }).unwrap();
      toast.success("Money sent successfully!");
      setReceiverId("");
      setAmount("");
    } catch (err: any) {
      toast.error(err.data?.message || "Error sending money");
    }
  };

  if (walletLoading) return <p>Loading wallet...</p>;

  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 md:p-8 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Send Money</h2>
      <p className="text-gray-600 mb-6 text-center">
        Your balance: <strong>${walletData?.data.balance ?? 0}</strong>
      </p>

      <form onSubmit={handleSendMoney} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Receiver ID</label>
          <input
            type="text"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter receiver's user ID"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter amount"
            min={1}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Money"}
        </button>
      </form>
    </div>
  );
}
