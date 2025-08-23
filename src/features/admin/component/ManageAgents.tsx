
import { Button } from "@/components/ui/button";
import { useGetAgentsQuery, useToggleAgentStatusMutation } from "../admin.api";

export default function ManageAgents() {
  const { data: agents, isLoading } = useGetAgentsQuery();
  const [toggleAgentStatus] = useToggleAgentStatusMutation();

  if (isLoading) return <p>Loading agents...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Agents</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {agents?.map(a => (
            <tr key={a._id}>
              <td className="border p-2">{a.name}</td>
              <td className="border p-2">{a.email}</td>
              <td className="border p-2">{a.status}</td>
              <td className="border p-2">
                <Button onClick={() => toggleAgentStatus(a._id)}>
                  {a.status === "approved" ? "Suspend" : "Approve"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
