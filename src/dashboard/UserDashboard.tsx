// import { useGetMyWalletQuery } from "@/features/wallet/wallet.api";
// import { useAuth } from "@/Context/AuthContext";

// const UserDashboard = () => {
//   const { user } = useAuth();
//   const { data, error, isLoading } = useGetMyWalletQuery();
//   console.log({ data, error, isLoading });
//   console.log("Wallet query:", { data, error, isLoading });
//   if (isLoading) return <p>Loading wallet...</p>;
//   if (error) return <p>Error loading wallet</p>;

//   return (
//     <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14 max-w-5xl mx-auto">
//       <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center sm:text-left">
//         Hello, {user?.name} 👋
//       </h2>

//       <p className="text-gray-600 mb-6 text-center sm:text-left">
//         Your role: <strong>{user?.role}</strong>
//       </p>

//       <div className="bg-gray-100 p-4 sm:p-6 rounded-md shadow-sm mb-8">
//         <p className="text-base sm:text-lg mb-1">Wallet Balance</p>
//         <h3 className="text-2xl sm:text-3xl font-bold text-primary">
//           ${data?.data.balance ?? 0}
//         </h3>
//       </div>
//     </section>
//   );
// };

// export default UserDashboard;


import { useGetMyWalletQuery } from "@/features/wallet/wallet.api";
import { useAuth } from "@/Context/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();
  const { data, error, isLoading } = useGetMyWalletQuery();

  if (isLoading) return <p className="text-center py-6">Loading wallet...</p>;
  if (error) return <p className="text-center py-6 text-red-500">Error loading wallet</p>;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-10 lg:py-14 max-w-5xl mx-auto">
      {/* Greeting */}
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center sm:text-left">
        Hello, {user?.name} 👋
      </h2>

      <p className="text-gray-600 mb-6 text-center sm:text-left">
        Your role: <strong>{user?.role}</strong>
      </p>

      {/* Wallet Card */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 sm:p-6 rounded-md shadow-sm mb-8 text-center sm:text-left">
        <p className="text-base sm:text-lg mb-1">Wallet Balance</p>
        <h3 className="text-2xl sm:text-3xl font-bold text-primary">
          ${data?.data.balance ?? 0}
        </h3>
      </div>

    </section>
  );
};

export default UserDashboard;