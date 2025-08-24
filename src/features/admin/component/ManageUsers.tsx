/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useGetUsersQuery, useToggleUserStatusMutation } from "../admin.api";


export default function ManageUsers() {
  const { data: users, isLoading, error } = useGetUsersQuery();
  const [toggleUserStatus] = useToggleUserStatusMutation();

  console.log("Users in Component:", users);

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">Failed to load users</p>;

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
          {users?.map((u: any) => (
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
}


