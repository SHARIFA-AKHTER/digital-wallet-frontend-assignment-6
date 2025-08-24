/* eslint-disable @typescript-eslint/no-explicit-any */

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
