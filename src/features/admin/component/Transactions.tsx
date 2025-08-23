import { useGetTransactionsQuery } from "../admin.api";


export default function Transactions() {
  const { data: txns, isLoading } = useGetTransactionsQuery();

  if (isLoading) return <p>Loading transactions...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Transactions</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">User</th>
            <th className="border p-2">Amount</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Fee</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {txns?.map(t => (
            <tr key={t._id}>
              <td className="border p-2">{t.toUser || "N/A"}</td>
              <td className="border p-2">{t.amount}</td>
              <td className="border p-2">{t.type}</td>
              <td className="border p-2">{t.fee || 0}</td>
              <td className="border p-2">{new Date(t.createdAt || "").toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
