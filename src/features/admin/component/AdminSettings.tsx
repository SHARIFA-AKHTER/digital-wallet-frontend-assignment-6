/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";

interface ISettings {
  transactionFee: number;
  maxLimit: number;
  minLimit: number;
}

const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState<ISettings>({
    transactionFee: 0,
    maxLimit: 0,
    minLimit: 0,
  });
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch settings from server
  const fetchSettings = async () => {
    try {
      const res = await axiosInstance.get("/admin/settings");
      setSettings({
        transactionFee: res.data.data?.transactionFee || 0,
        maxLimit: res.data.data?.maxLimit || 0,
        minLimit: res.data.data?.minLimit || 0,
      });
    } catch (err: any) {
      console.error("❌ Failed to fetch settings:", err);
      toast.error(err?.response?.data?.message || "Failed to fetch settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // PATCH request to /admin/settings-update
      await axiosInstance.patch("/admin/settings-update", settings);
      toast.success("Settings updated successfully!");
    } catch (err: any) {
      console.error("❌ Failed to update settings:", err);
      toast.error(err?.response?.data?.message || "Failed to update settings");
    }
  };

  if (loading) return <p>Loading settings...</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">Admin Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Transaction Fee (%)</label>
          <input
            type="number"
            name="transactionFee"
            value={settings.transactionFee}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Maximum Transaction Limit</label>
          <input
            type="number"
            name="maxLimit"
            value={settings.maxLimit}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Minimum Transaction Limit</label>
          <input
            type="number"
            name="minLimit"
            value={settings.minLimit}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Update Settings
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;
