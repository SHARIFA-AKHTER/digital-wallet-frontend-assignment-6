import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { Button } from "@/components/ui/button";

interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: string;
}

const ManageUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // fetch users
  const fetchUsers = async () => {
    try {
      const res = await axiosInstance.get("/admin/users");
      setUsers(res.data?.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  // toggle user status
  const toggleUserStatus = async (userId: string) => {
    try {
      await axiosInstance.patch(`/admin/users/${userId}/toggle`);
      fetchUsers();
    } catch (err) {
      console.error("❌ Failed to toggle user status:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center py-6">Loading users...</p>;
  if (!users.length) return <p className="text-center py-6">No users found.</p>;

  return (
    <div className="p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Manage Users
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border divide-y divide-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-2  text-left text-sm md:text-base font-medium text-gray-700">
                Name
              </th>
              <th className="px-3 hidden py-2  md:table-cell  text-left text-sm md:text-base font-medium text-gray-700">
                Email
              </th>
              <th className="px-3 hidden  py-2  md:table-cell  text-left text-sm md:text-base font-medium text-gray-700">
                Role
              </th>
              <th className="px-3 hidden  md:table-cell  py-2 text-left text-sm md:text-base font-medium text-gray-700">
                Status
              </th>
              <th className="px-3  py-2 text-center text-sm md:text-base font-medium text-gray-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((u) => (
              <tr key={u._id} className="hover:bg-gray-50 transition">
                <td className="px-3 py-2 text-sm md:text-base">{u.name}</td>
                <td className="px-3 py-2 hidden md:table-cell text-sm md:text-base">
                  {u.email}
                </td>
                <td className="px-3 py-2 hidden md:table-cell text-sm md:text-base">
                  {u.role}
                </td>
                <td className="px-3 py-1 hidden  md:table-cell  text-sm md:text-base">
                  <span
                    className={`px-2 py-1 rounded-full text-xs md:text-sm font-semibold ${
                      u.isActive === "ACTIVE"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {u.isActive}
                  </span>
                </td>
                <td className="px-3 py-2 text-center">
                  <Button
                    size="sm"
                    variant={
                      u.isActive === "ACTIVE" ? "destructive" : "default"
                    }
                    onClick={() => toggleUserStatus(u._id)}
                  >
                    {u.isActive === "ACTIVE" ? "Block" : "Unblock"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
