import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // যদি phone থাকে
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const storedUser = localStorage.getItem("authUser");
      if (!storedUser) return;

      const { token } = JSON.parse(storedUser);

      try {
        const res = await axios.get("http://localhost:3000/api/v1/users", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const profile = res.data.data;
        setName(profile.name || "");
        setPhone(profile.phone || "");
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    const storedUser = localStorage.getItem("authUser");
    if (!storedUser) return;

    const { token } = JSON.parse(storedUser);

    setLoading(true);
    try {
      const res = await axios.put(
        "http://localhost:3000/api/v1/users/update-profile",
        { name, phone, password },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const updatedProfile = res.data.data;

      toast.success("Profile updated successfully");

      // localStorage update
      const authUser = JSON.parse(localStorage.getItem("authUser") || "{}");
      const newAuthUser = {
        ...authUser,
        user: {
          ...authUser.user,
          name: updatedProfile.name,
          phone: updatedProfile.phone,
        },
      };
      localStorage.setItem("authUser", JSON.stringify(newAuthUser));
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded"
          placeholder="Phone Number"
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
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
