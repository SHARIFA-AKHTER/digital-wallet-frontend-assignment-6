/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetProfileQuery, useUpdateProfileMutation } from "@/features/user/users.api";
import { useState, useEffect } from "react";
import { toast } from "sonner";


export default function Profile() {
  const { data: profile, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // fill form once profile is loaded
  useEffect(() => {
    if (profile) setName(profile.name);
  }, [profile]);

  const handleUpdate = async () => {
    try {
      const updated = await updateProfile({ name, password }).unwrap();
      toast.success("Profile updated successfully");

      // update localStorage
      const authUser = JSON.parse(localStorage.getItem("authUser") || "{}");
      const newAuthUser = {
        ...authUser,
        user: {
          ...authUser.user,
          name: updated.name,
        },
      };
      localStorage.setItem("authUser", JSON.stringify(newAuthUser));
      setPassword(""); 
    } catch (err: any) {
      console.error(err);
      toast.error(err?.data?.message || "Failed to update profile");
    }
  };

  if (isLoading) return <p className="text-center py-6">Loading profile...</p>;

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Update Profile</h2>
      <div className="flex flex-col gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          placeholder="Full Name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          placeholder="New Password"
        />
        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white py-2 rounded"
          disabled={updating}
        >
          {updating ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
