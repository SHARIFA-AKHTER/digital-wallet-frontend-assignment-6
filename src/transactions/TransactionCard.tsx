interface TransactionCardProps {
  type: "Send" | "CashIn" | "CashOut" | "Withdraw" | "Add";
  amount: number;
  status: "Pending" | "Completed" | "Reversed";
  sender: string;
  receiver: string;
  createdAt: string;
}

const TransactionCard = ({
  type,
  amount,
  status,
  sender,
  receiver,
  createdAt,
}: TransactionCardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{type}</span>
        <span className="text-sm">{new Date(createdAt).toLocaleString()}</span>
      </div>
      <p>Amount: ${amount}</p>
      <p>Status: {status}</p>
      <p>From: {sender}</p>
      <p>To: {receiver}</p>
    </div>
  );
};

export default TransactionCard;