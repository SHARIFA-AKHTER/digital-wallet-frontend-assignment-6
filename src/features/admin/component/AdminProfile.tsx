/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";

interface IProfile {
  name: string;
  email: string;
}

const AdminProfile: React.FC = () => {
  const [profile, setProfile] = useState<IProfile>({ name: "", email: "" });
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch profile from server
  const fetchProfile = async () => {
    try {
      const res = await axiosInstance.get("/admin/profile");
      const data = res.data.data;
      setProfile({ name: data.name, email: data.email });
    } catch (err: any) {
      console.error("❌ Failed to fetch profile:", err);
      toast.error(err?.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosInstance.patch("/admin/profile-update", {
        ...profile,
        ...(password ? { password } : {}),
      });
      toast.success("Profile updated successfully!");
      setPassword(""); 
    
    } catch (err: any) {
      console.error("❌ Failed to update profile:", err);
      toast.error(err?.response?.data?.message || "Failed to update profile");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Admin Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="Leave blank to keep current password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default AdminProfile;

