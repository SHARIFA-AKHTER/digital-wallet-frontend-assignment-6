/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useAuth } from "@/Context/AuthContext";
// import { toast } from "sonner";

// export default function SendMoneyPage() {
//   const { user } = useAuth();
//   const [walletBalance, setWalletBalance] = useState<number>(0);
//   const [loadingWallet, setLoadingWallet] = useState(true);
//   const [receiverId, setReceiverId] = useState("");
//   const [amount, setAmount] = useState<number | "">("");
//   const [sending, setSending] = useState(false);

//   const axiosInstance = axios.create({
//     baseURL: "http://localhost:3000/api/v1",
//     headers: {
//       Authorization: `Bearer ${user?.token ?? ""}`,
//     },
//   });

//   // Fetch wallet balance
//   const fetchWallet = async () => {
//     setLoadingWallet(true);
//     try {
//       const res = await axiosInstance.get("/wallet/me");
//       setWalletBalance(res.data.data.balance);
//     } catch (err: any) {
//       toast.error(err.response?.data?.message || "Failed to load wallet");
//     } finally {
//       setLoadingWallet(false);
//     }
//   };

//   useEffect(() => {
//     if (user) fetchWallet();
//   }, [user]);

//   const handleSendMoney = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!receiverId || !amount) {
//       toast.error("⚠️ Please fill all fields");
//       return;
//     }
//     setSending(true);
//     try {
//       await axiosInstance.post("/wallet/send-money", {
//         receiverId,
//         amount: Number(amount),
//         userId: user?._id,
//       });
//       toast.success("✅ Money sent successfully!");
//       setReceiverId("");
//       setAmount("");
//       fetchWallet(); // update balance
//     } catch (err: any) {
//       toast.error(err.response?.data?.message || "❌ Error sending money");
//     } finally {
//       setSending(false);
//     }
//   };

//   if (loadingWallet) return <p className="text-center mt-6">Loading wallet...</p>;

//   return (
//     <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
//       <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
//         Send Money
//       </h2>
//       <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
//         Your balance:{" "}
//         <span className="font-semibold text-indigo-600 dark:text-indigo-400">
//           ${walletBalance}
//         </span>
//       </p>

//       <form onSubmit={handleSendMoney} className="space-y-5">
//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//             Receiver ID
//           </label>
//           <input
//             type="text"
//             value={receiverId}
//             onChange={(e) => setReceiverId(e.target.value)}
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter receiver's user ID"
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
//             Amount
//           </label>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             placeholder="Enter amount"
//             min={1}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={sending}
//           className="w-full py-3 px-4 rounded-lg font-semibold text-white transition
//                      bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600
//                      disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
//         >
//           {sending ? "Sending..." : "🚀 Send Money"}
//         </button>
//       </form>
//     </div>
//   );
// }

// SendMoneyPage.tsx
import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/Context/AuthContext";
import {
  useGetMyWalletQuery,
  useSendMoneyMutation,
} from "@/features/wallet/wallet.api";

export default function SendMoneyPage() {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useGetMyWalletQuery(undefined, {
    skip: !user, // skip if user not logged in
  });

  const [sendMoney, { isLoading: sending }] = useSendMoneyMutation();

  const [receiverId, setReceiverId] = useState("");
  const [amount, setAmount] = useState<number | "">("");

  const handleSendMoney = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!receiverId || !amount) {
      toast.error("⚠️ Please fill all fields");
      return;
    }

    try {
      await sendMoney({
        receiverId,
        amount: Number(amount),
        userId: user?._id,
      }).unwrap();
      toast.success("✅ Money sent successfully!");
      setReceiverId("");
      setAmount("");
      refetch(); 
    } catch (err: any) {
      toast.error(err.data?.message || "❌ Error sending money");
    }
  };

  if (isLoading) return <p className="text-center mt-6">Loading wallet...</p>;

  return (
    <div className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-900 dark:text-white">
        Send Money
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
        Your balance:{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          {data?.data.balance ?? 0} ৳
        </span>
      </p>

      <form onSubmit={handleSendMoney} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Receiver ID
          </label>
          <input
            type="text"
            value={receiverId}
            onChange={(e) => setReceiverId(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter receiver's user ID"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter amount"
            min={1}
            required
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full py-3 px-4 rounded-lg font-semibold text-white transition 
                     bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600
                     disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        >
          {sending ? "Sending..." : "🚀 Send Money"}
        </button>
      </form>
    </div>
  );
}
