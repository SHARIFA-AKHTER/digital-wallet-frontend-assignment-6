
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar (Top on mobile, Left on larger screens) */}
      <div className="w-full md:w-64 border-b md:border-b-0 md:border-r bg-white dark:bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}



// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { useState } from "react";

// export default function DashboardLayout() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-white dark:bg-gray-900 
//         transition-transform duration-200 ease-in-out 
//         md:relative md:translate-x-0 md:block 
//         ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
//       >
//         <Sidebar onClose={() => setIsOpen(false)} />
//       </div>

//       {/* Main content */}
//       <main className="flex-1 p-6 bg-white dark:bg-gray-800 md:ml-64">
//         {/* Mobile menu button */}
//         <button
//           className="md:hidden mb-4 p-2 bg-gray-200 rounded"
//           onClick={() => setIsOpen(true)}
//         >
//           ☰ Menu
//         </button>

//         <Outlet />
//       </main>
//     </div>
//   );
// }
