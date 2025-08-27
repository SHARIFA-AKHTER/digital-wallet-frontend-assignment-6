/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCashInMutation, useCashOutMutation } from "@/features/user/users.api";
import React, { useState } from "react";

import { toast } from "sonner";

const CashInCashOut: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [action, setAction] = useState<"cashIn" | "cashOut">("cashIn");

  const [cashIn, { isLoading: isCashIn }] = useCashInMutation();
  const [cashOut, { isLoading: isCashOut }] = useCashOutMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || amount <= 0) {
      toast.error("Please enter a valid User ID and amount");
      return;
    }

    try {
      if (action === "cashIn") {
        await cashIn({
          userId, amount,
          receiverId: ""
        }).unwrap();
        toast.success("Cash-In successful!");
      } else {
        await cashOut({
          userId, amount,
          receiverId: ""
        }).unwrap();
        toast.success("Cash-Out successful!");
      }
      setUserId("");
      setAmount(0);
    } catch (error: any) {
      toast.error(error?.data?.message || "Operation failed");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Agent Cash-In / Cash-Out</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">User ID</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter User ID"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Amount</label>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Action</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as "cashIn" | "cashOut")}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="cashIn">Cash In</option>
            <option value="cashOut">Cash Out</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={isCashIn || isCashOut}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {isCashIn || isCashOut ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default CashInCashOut;
