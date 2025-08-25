
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
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
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) {
      console.log("❌ No user found in localStorage");
      setLoading(false);
      return;
    }

    const { token } = JSON.parse(storedUser);

    try {
      const res = await axios.get("http://localhost:3000/api/v1/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data?.data || []);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  // toggle user status
  const toggleUserStatus = async (userId: string) => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) return;

    const { token } = JSON.parse(storedUser);

    try {
      await axios.patch(
        `http://localhost:3000/api/v1/admin/users/${userId}/status`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // refresh user list after toggle
      fetchUsers();
    } catch (err) {
      console.error("❌ Failed to toggle user status:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (!users.length) return <p>No users found.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2">{u.isActive}</td>
              <td className="border p-2">
                <Button onClick={() => toggleUserStatus(u._id)}>
                  {u.isActive === "ACTIVE" ? "Block" : "Unblock"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
