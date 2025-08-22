/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createContext, useContext, type ReactNode } from "react";
// import { 
//   useGetMyWalletQuery, 
//   useAddMoneyMutation, 
//   useWithdrawMoneyMutation, 
//   useSendMoneyMutation 
// } from "@/features/wallet/wallet.api";

// interface WalletContextType {
//   balance: number;
//   transactions: any[];
//   loading: boolean;
//   addMoney: (amount: number) => Promise<void>;
//   withdrawMoney: (amount: number) => Promise<void>;
//   sendMoney: (amount: number, to: string) => Promise<void>;
// }

// const WalletContext = createContext<WalletContextType | null>(null);

// export const WalletProvider = ({ children }: { children: ReactNode }) => {
//   // ✅ RTK Query automatically fetches and caches
//   const { data, isLoading, refetch } = useGetMyWalletQuery(undefined, { refetchOnMountOrArgChange: true });
//   const [addMoneyMutation] = useAddMoneyMutation();
//   const [withdrawMoneyMutation] = useWithdrawMoneyMutation();
//   const [sendMoneyMutation] = useSendMoneyMutation();

//   const addMoney = async (amount: number) => {
//     await addMoneyMutation({ amount }).unwrap();
//     refetch(); // only refetch once, no useEffect
//   };

//   const withdrawMoney = async (amount: number) => {
//     await withdrawMoneyMutation({ amount }).unwrap();
//     refetch();
//   };

//   const sendMoney = async (amount: number, to: string) => {
//     await sendMoneyMutation({ amount, to }).unwrap();
//     refetch();
//   };

//   return (
//     <WalletContext.Provider
//       value={{
//         balance: data?.data.balance || 0,
//         transactions: data?.data.transactions || [],
//         loading: isLoading,
//         addMoney,
//         withdrawMoney,
//         sendMoney,
//       }}
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

// src/Context/WalletContext.tsx
import { createContext, useContext, type ReactNode } from "react";
import { useGetMyWalletQuery } from "@/features/wallet/wallet.api";

interface WalletContextType {
  balance: number;
  isLoading: boolean;
  error: any;
}

const WalletContext = createContext<WalletContextType | null>(null);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, error } = useGetMyWalletQuery();

  return (
    <WalletContext.Provider
      value={{
        balance: data?.data.balance || 0,
        isLoading,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) throw new Error("useWallet must be used within WalletProvider");
  return context;
};
