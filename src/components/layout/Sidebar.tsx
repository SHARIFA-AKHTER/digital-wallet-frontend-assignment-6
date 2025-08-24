import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useGetWalletQuery } from "@/features/user/users.api";
import { useUserRole } from "@/hooks/useUserRole";

const Sidebar = () => {
  const { isAdmin, isAgent, isUser } = useUserRole();
  const { data: walletData } = useGetWalletQuery();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block text-indigo-600 font-semibold px-4 py-2 bg-indigo-100 rounded"
      : "block text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded transition";

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden bg-white p-4 shadow flex justify-between items-center sticky top-0 z-50">
        <h2 className="text-xl font-bold text-indigo-600">Dashboard</h2>
        <button onClick={toggleSidebar}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 z-40 w-64 h-full md:h-auto bg-white border-r border-gray-200 shadow-md md:shadow-none transition-transform duration-300 transform 
  ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="h-full md:h-auto p-4 overflow-y-auto md:overflow-visible">
          <ul className="space-y-3 text-base">
            <li>
              <NavLink to="/" className={linkClass}>
                🏠 Home
              </NavLink>
            </li>

            {/* USER Panel */}
            {isUser && (
              <>
                <li className="text-xs uppercase text-gray-500 mt-4">
                  User Panel
                </li>
                <li>
                  <NavLink to="/dashboard/user" className={linkClass}>
                    📊 Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/wallet" className={linkClass}>
                    💰 Wallet ({walletData?.balance || 0})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/user/send-money"
                    className={linkClass}
                  >
                    💸 Send Money({walletData?.balance || 0})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/user/transactions"
                    className={linkClass}
                  >
                    📄 Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/user/profile" className={linkClass}>
                    👤 Profile 
                  </NavLink>
                </li>
              </>
            )}

            {/* ADMIN Panel */}
            {isAdmin && (
              <>
                <li className="text-xs uppercase text-gray-500 mt-4">
                  Admin Panel
                </li>
                <li>
                  <NavLink to="/dashboard/admin" end className={linkClass}>
                    🛠 Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/users" className={linkClass}>
                    👥 User Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/agents" className={linkClass}>
                    🧑‍💼 Agent Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/transactions"
                    className={linkClass}
                  >
                    📄 All Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/settings" className={linkClass}>
                    ⚙️ Settings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admin/profile" className={linkClass}>
                    🙍‍♂️ Profile
                  </NavLink>
                </li>
              </>
            )}

            {/* AGENT Panel */}
            {isAgent && (
              <>
                <li className="text-xs uppercase text-gray-500 mt-4">
                  Agent Panel
                </li>
                <li>
                  <NavLink to="/dashboard/agent" className={linkClass}>
                    🧾 Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/agent/wallet" className={linkClass}>
                    💰 Wallet
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/agent/transactions"
                    className={linkClass}
                  >
                    📄 Transactions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/agent/agent-commission"
                    className={linkClass}
                  >
                    📈 Commission
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/agent/profile" className={linkClass}>
                    👤 Profile 
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

