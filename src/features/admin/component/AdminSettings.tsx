/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useEffect } from "react";

import { toast } from "sonner";
import { useGetSettingsQuery, useUpdateSettingsMutation } from "../admin.api";

const AdminSettings: React.FC = () => {
  const { data, isLoading, isError } = useGetSettingsQuery();
  const [updateSettings] = useUpdateSettingsMutation();

  const [transactionFee, setTransactionFee] = useState<number>(0);
  const [maxLimit, setMaxLimit] = useState<number>(0);
  const [minLimit, setMinLimit] = useState<number>(0);

  useEffect(() => {
    if (data?.success) {
      setTransactionFee(data.data.transactionFee);
      setMaxLimit(data.data.maxLimit);
      setMinLimit(data.data.minLimit);
    }
  }, [data]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateSettings({
          transactionFee, maxLimit, minLimit,
          data: undefined
      }).unwrap();
      toast.success("Settings updated successfully!");
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update settings");
    }
  };

  if (isLoading) return <p>Loading settings...</p>;
  if (isError) return <p>Failed to load settings</p>;

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-xl font-semibold mb-4 text-indigo-600">
        Admin Settings
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Transaction Fee (%)</label>
          <input
            type="number"
            value={transactionFee}
            onChange={(e) => setTransactionFee(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Maximum Transaction Limit
          </label>
          <input
            type="number"
            value={maxLimit}
            onChange={(e) => setMaxLimit(Number(e.target.value))}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">
            Minimum Transaction Limit
          </label>
          <input
            type="number"
            value={minLimit}
            onChange={(e) => setMinLimit(Number(e.target.value))}
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
