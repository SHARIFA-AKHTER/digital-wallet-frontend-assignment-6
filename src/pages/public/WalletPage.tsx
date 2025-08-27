
import { Button } from "@/components/ui/button";
import {
  useGetMyWalletQuery,
  useAddMoneyMutation,
  useWithdrawMoneyMutation,
} from "@/features/wallet/wallet.api";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function WalletPage() {
  const { data, isLoading, isError, refetch } = useGetMyWalletQuery();
  const [addMoney, { isLoading: adding }] = useAddMoneyMutation();
  const [withdrawMoney, { isLoading: withdrawing }] =
    useWithdrawMoneyMutation();

  const [loadingAction, setLoadingAction] = useState<"add" | "withdraw" | null>(
    null
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-8 h-8 text-blue-500" />
        <p className="ml-2">Loading wallet...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-red-500 text-center">
        Failed to load wallet. Please try again.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        My Wallet
      </h2>
      <p className="mb-6 text-lg font-medium">
        💰 Balance:{" "}
        <span className="font-bold text-green-600 dark:text-green-400">
          {data?.data.balance ?? 0} ৳
        </span>
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          disabled={adding || loadingAction === "add"}
          onClick={async () => {
            try {
              setLoadingAction("add");
              await addMoney({
               amount: 100,
                receiverId: "abc123",
                userId: "xyz789",
              }).unwrap();
              toast.success("Successfully added 1000 ৳");
              refetch();
            } catch {
              toast.error("Failed to add money");
            } finally {
              setLoadingAction(null);
            }
          }}
        >
          {loadingAction === "add" ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2" /> Adding...
            </>
          ) : (
            "➕ Add 100"
          )}
        </Button>

        <Button
          variant="destructive"
          disabled={withdrawing || loadingAction === "withdraw"}
          onClick={async () => {
            try {
              setLoadingAction("withdraw");
              await withdrawMoney({
               amount: 100,
                receiverId: "abc123",
                userId: "xyz789",
              }).unwrap();
              toast.success("Successfully withdrew 500 ৳");
              refetch();
            } catch {
              toast.error("Failed to withdraw money");
            } finally {
              setLoadingAction(null);
            }
          }}
        >
          {loadingAction === "withdraw" ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2" /> Withdrawing...
            </>
          ) : (
            "➖ Withdraw 50"
          )}
        </Button>
      </div>
    </div>
  );
}
