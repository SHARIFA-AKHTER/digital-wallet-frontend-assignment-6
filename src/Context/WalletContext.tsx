// /* eslint-disable react-hooks/exhaustive-deps */

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   type ReactNode,
// } from "react";
// import useAuthAxios from "@/hooks/useAuthAxios";
// import type { IWallet } from "@/types/wallet";

// interface WalletContextType {
//   balance: number;
//   addMoney: (amount: number) => Promise<void>;
//   withdrawMoney: (amount: number) => Promise<void>;
//   refreshBalance: () => Promise<void>;
// }

// const WalletContext = createContext<WalletContextType | undefined>(undefined);

// export const WalletProvider = ({ children }: { children: ReactNode }) => {
//   const [balance, setBalance] = useState<number>(0);
//   const axiosSecure = useAuthAxios();

//   const fetchBalance = async () => {
//     try {
//       const res = await axiosSecure.get<{ success: boolean; data: IWallet }>(
//         "/wallet/me"
//       );
//       if (res.data.success) {
//         setBalance(res.data.data.balance);
//       }
//     } catch (error) {
//       console.error("🔴 Failed to fetch balance:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBalance();
//   }, []);

//   const addMoney = async (amount: number) => {
//     try {
//       const res = await axiosSecure.post<{ success: boolean; data: IWallet }>(
//         "/wallet/add",
//         { amount }
//       );
//       if (res.data.success) {
//         setBalance(res.data.data.balance);
//       }
//     } catch (error) {
//       console.error("🔴 Add money failed:", error);
//       throw error;
//     }
//   };

//   const withdrawMoney = async (amount: number) => {
//     try {
//       const res = await axiosSecure.post<{ success: boolean; data: IWallet }>(
//         "/wallet/withdraw",
//         { amount }
//       );
//       if (res.data.success) {
//         setBalance(res.data.data.balance);
//       }
//     } catch (error) {
//       console.error("🔴 Withdraw failed:", error);
//       throw error;
//     }
//   };

//   return (
//     <WalletContext.Provider
//       value={{ balance, addMoney, withdrawMoney, refreshBalance: fetchBalance }}
//     >
//       {children}
//     </WalletContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useWallet = () => {
//   const context = useContext(WalletContext);
//   if (!context) throw new Error("useWallet must be used within WalletProvider");
//   return context;
// };



const WalletContext = () => {
    return (
        <div>
            Hello
        </div>
    );
};

export default WalletContext;