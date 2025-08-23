import Card from "@/components/ui/Card";
import { useGetOverviewQuery } from "../admin.api";
import { CardContent } from '@/components/ui/card';

export default function AdminOverview() {
  const { data, isLoading, error } = useGetOverviewQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading overview</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card><CardContent><h3>Total Users</h3><p>{data?.totalUsers}</p></CardContent></Card>
      <Card><CardContent><h3>Total Agents</h3><p>{data?.totalAgents}</p></CardContent></Card>
      <Card><CardContent><h3>Total Transactions</h3><p>{data?.totalTransactions}</p></CardContent></Card>
      <Card><CardContent><h3>Total Volume</h3><p>৳{data?.totalVolume}</p></CardContent></Card>
    </div>
  );
}
