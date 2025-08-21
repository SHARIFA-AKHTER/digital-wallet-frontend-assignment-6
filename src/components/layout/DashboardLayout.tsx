
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white dark:bg-gray-800">
        <Outlet /> {/* Nested route content will render here */}
      </main>
    </div>
  );
}
