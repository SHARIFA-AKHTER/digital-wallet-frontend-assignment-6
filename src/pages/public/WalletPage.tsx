
/* eslint-disable @typescript-eslint/no-explicit-any */
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Loader2 } from "lucide-react";
// import { toast } from "sonner";

// interface WalletRes {
//   balance: number;
// }

// const axiosInstance = axios.create({
//   baseURL: "https://digital-wallet-api-backend.vercel.app/api/v1",
//   withCredentials: true,
// });

// // Add token from localStorage if exists
// axiosInstance.interceptors.request.use((config) => {
//   const authUser = localStorage.getItem("authUser");
//   if (authUser) {
//     const { token } = JSON.parse(authUser);
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default function WalletPage() {
//   const [wallet, setWallet] = useState<WalletRes | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [actionLoading, setActionLoading] = useState<"add" | "withdraw" | null>(null);

//   const fetchWallet = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axiosInstance.get("/wallet/me");
//       setWallet(data.data);
//     } catch (err: any) {
//       toast.error("Failed to fetch wallet");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addMoney = async (amount: number) => {
//     try {
//       setActionLoading("add");
//       await axiosInstance.post("/wallet/add", { amount, userId: "xyz789", receiverId: "abc123" });
//       toast.success(`Successfully added ${amount} ৳`);
//       fetchWallet();
//     } catch {
//       toast.error("Failed to add money");
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   const withdrawMoney = async (amount: number) => {
//     try {
//       setActionLoading("withdraw");
//       await axiosInstance.post("/wallet/withdraw", { amount, userId: "xyz789", receiverId: "abc123" });
//       toast.success(`Successfully withdrew ${amount} ৳`);
//       fetchWallet();
//     } catch {
//       toast.error("Failed to withdraw money");
//     } finally {
//       setActionLoading(null);
//     }
//   };

//   useEffect(() => {
//     fetchWallet();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
//         <p className="ml-2">Loading wallet...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
//         My Wallet
//       </h2>
//       <p className="mb-6 text-lg font-medium">
//         💰 Balance:{" "}
//         <span className="font-bold text-green-600 dark:text-green-400">
//           {wallet?.balance ?? 0} ৳
//         </span>
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <Button disabled={actionLoading === "add"} onClick={() => addMoney(100)}>
//           {actionLoading === "add" ? (
//             <>
//               <Loader2 className="animate-spin w-4 h-4 mr-2" /> Adding...
//             </>
//           ) : (
//             "➕ Add 100"
//           )}
//         </Button>

//         <Button variant="destructive" disabled={actionLoading === "withdraw"} onClick={() => withdrawMoney(50)}>
//           {actionLoading === "withdraw" ? (
//             <>
//               <Loader2 className="animate-spin w-4 h-4 mr-2" /> Withdrawing...
//             </>
//           ) : (
//             "➖ Withdraw 50"
//           )}
//         </Button>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import axiosInstance from "@/lib/axios";

interface WalletRes { balance: number; }

export default function WalletPage() {
  const [wallet, setWallet] = useState<WalletRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<"add" | "withdraw" | null>(null);

  const fetchWallet = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/wallet/me");
      console.log(data);
      setWallet(data.data);
    } catch (err: any) {
      // toast.error(err.response?.data?.message || "Failed to fetch wallet");
       console.error("Wallet fetch error:", err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (type: "add" | "withdraw", amount: number) => {
    setActionLoading(type);
    try {
      const url = type === "add" ? "/wallet/add" : "/wallet/withdraw";
      await axiosInstance.post(url, { amount });
      toast.success(`${type === "add" ? "Added" : "Withdrew"} ${amount} ৳`);
      fetchWallet();
    } catch (err: any) {
      toast.error(err.response?.data?.message || `Failed to ${type}`);
    } finally {
      setActionLoading(null);
    }
  };

  useEffect(() => { fetchWallet(); }, []);

  if (loading) return <Loader2 className="animate-spin w-8 h-8 text-blue-500" />;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Wallet</h2>
      <p className="mb-6 text-lg font-medium">💰 Balance: <span className="font-bold text-green-600">{wallet?.balance ?? 0} ৳</span></p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button disabled={actionLoading === "add"} onClick={() => handleAction("add", 100)}>
          {actionLoading === "add" ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "➕ Add 100"}
        </Button>
        <Button variant="destructive" disabled={actionLoading === "withdraw"} onClick={() => handleAction("withdraw", 50)}>
          {actionLoading === "withdraw" ? <Loader2 className="animate-spin w-4 h-4 mr-2" /> : "➖ Withdraw 50"}
        </Button>
      </div>
    </div>
  );
}
