import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";

interface IAgent {
  _id: string;
  name: string;
  email: string;
  status: string;
}

export default function ManageAgents() {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch agents
  const fetchAgents = async () => {
    try {
      const res = await axiosInstance.get("/admin/agents");
      setAgents(res.data?.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch agents:", err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle agent status
  const toggleAgentStatus = async (agentId: string) => {
    try {
      await axiosInstance.patch(`/admin/agents/${agentId}/toggle`);
      fetchAgents(); // refresh after toggle
    } catch (err) {
      console.error("❌ Failed to toggle agent status:", err);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  if (loading) return <p>Loading agents...</p>;
  if (!agents.length) return <p>No agents found.</p>;

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left text-gray-800">
        Manage Agents
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Name
              </th>
              <th className="px-3 hidden sm:table-cell py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Email
              </th>
              <th className="px-3 py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Status
              </th>
              <th className="px-3 py-2 text-center text-sm md:text-base font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {agents.map((a) => (
              <tr key={a._id} className="hover:bg-gray-50 transition">
                <td className="px-3 py-2 text-sm md:text-base">{a.name}</td>
                <td className="px-3 py-2 hidden sm:table-cell text-sm md:text-base">
                  {a.email}
                </td>
                <td className="px-3 py-2 text-sm md:text-base">
                  <span
                    className={`px-2 py-1 rounded-full text-xs md:text-sm font-semibold ${
                      a.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-3 py-2 text-center">
                  <Button
                    size="sm"
                    variant={a.status === "approved" ? "destructive" : "default"}
                    onClick={() => toggleAgentStatus(a._id)}
                  >
                    {a.status === "approved" ? "Suspend" : "Approve"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
